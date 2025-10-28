import { useEffect, useState, useCallback } from 'react';
import styles from './Products.module.scss';
import { useGetProductsMutation } from '../../app/store/products/api';
import { Product } from '../../entities/Product/Product';
import { IProduct } from '../../types/products';
import { StatusBlock } from '../../shared/StatusBlock/StatusBlock';

export const Products = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const [fetchProducts, { isLoading, error }] = useGetProductsMutation();

  const loadProducts = useCallback(
    async (pageNum: number) => {
      try {
        const result = await fetchProducts({ page: pageNum }).unwrap();

        if (pageNum === 1) {
          setAllProducts(result);
        } else {
          setAllProducts((prev) => [...prev, ...result]);
        }

        setHasMore(result[0]?.hasMore ?? false);
      } catch (err) {
        console.error('Ошибка загрузки:', err);
      }
    },
    [fetchProducts],
  );

  useEffect(() => {
    loadProducts(1);
  }, [loadProducts]);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadProducts(nextPage);
    }
  }, [isLoading, hasMore, page, loadProducts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleRetry = () => {
    loadProducts(1);
    setPage(1);
  };

  if (isLoading || (error && allProducts.length === 0)) {
    return <StatusBlock isLoading={isLoading} error={error} onRetry={handleRetry} />;
  }

  return (
    <div className={styles.products}>
      {allProducts.map((product) => (
        <Product {...product} key={product.id}>
          <Product.Price price={product.price} oldPrice={product.oldPrice} />
        </Product>
      ))}
    </div>
  );
};
