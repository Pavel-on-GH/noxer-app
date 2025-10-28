import React from 'react';
import { ISearchResultCardProps } from './types';
import styles from './SearchResultCard.module.scss';
import { Product } from '../Product/Product';

export const SearchResultCard: React.FC<ISearchResultCardProps> = ({
  image,
  name,
  oldPrice,
  price,
}) => {
  return (
    <div className={styles.SearchResultCard}>
      {image ? (
        <img className={styles.image} src={image} alt={name} />
      ) : (
        <div className={styles.image} />
      )}
      <div>
        <p className={styles.name}>{name}</p>
        <Product.Price className={styles.price} oldPrice={oldPrice} price={price} />
      </div>
    </div>
  );
};
