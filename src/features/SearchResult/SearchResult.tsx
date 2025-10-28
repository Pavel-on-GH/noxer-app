import { useEffect, useMemo } from 'react';
import { useAppSelector } from '../../app/redux';
import { selectSearchQuery } from '../../app/store/products/selectors';
import { useGetProductsMutation } from '../../app/store/products/api';
import { StatusBlock } from '../../shared/StatusBlock/StatusBlock';
import { SearchResultCard } from '../../entities/SearchResultCard/SearchResultCard';
import styles from './SearchResult.module.scss';
import { useDebounce } from 'use-debounce';

const ALL_PRODUCTS = { per_page: 50, page: 3 };

export const SearchResult = () => {
  const searchQueryRaw = useAppSelector(selectSearchQuery);
  const [searchQuery] = useDebounce(searchQueryRaw, 300);

  const [fetchProducts, { isLoading, error, data: products }] = useGetProductsMutation();

  const searchedProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return products?.filter((product) => product.name?.toLowerCase().includes(query));
  }, [products, searchQuery]);

  useEffect(() => {
    fetchProducts(ALL_PRODUCTS);
  }, [fetchProducts]);

  if (isLoading || error) {
    return (
      <StatusBlock
        isLoading={isLoading}
        error={error}
        onRetry={() => fetchProducts(ALL_PRODUCTS)}
      />
    );
  }

  return (
    <div>
      <button className={styles.goButton}>Перейти</button>

      <div className={styles.searchedProducts}>
        {searchedProducts?.map((product) => (
          <SearchResultCard key={product.id} {...product} />
        ))}
      </div>

      {searchQuery && products && searchedProducts?.length === 0 && products.length > 0 && (
        <p>По запросу "{searchQuery}" ничего не найдено</p>
      )}
    </div>
  );
};
