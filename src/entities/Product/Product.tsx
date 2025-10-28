import React, { useMemo, useState } from 'react';
import styles from './Product.module.scss';
import { IPriceProps, IProductProps } from './types';
import HeartFilledIcon from '../../assets/icons/heart_filled.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import clsx from 'clsx';
import { Mark } from '../../types/products';

const Price: React.FC<IPriceProps> = ({ price, oldPrice }) => {
  const discountPercent = useMemo(() => {
    if (oldPrice) {
      const discount = ((oldPrice - price) / oldPrice) * 100;
      return -Math.round(discount);
    }
    return null;
  }, [price, oldPrice]);

  return (
    <>
      <span className={styles.price}>{price} ₽</span>
      {oldPrice && <s className={styles.oldPrice}>{oldPrice} ₽</s>}
      {discountPercent !== null && (
        <span className={clsx(styles.percent, { [styles.percentUp]: discountPercent > 0 })}>
          {discountPercent > 0 ? `+${discountPercent}` : discountPercent}%
        </span>
      )}
    </>
  );
};

export const Product: React.FC<IProductProps> & { Price: React.FC<IPriceProps> } = ({
  image,
  name,
  children,
  marks,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.product}>
      <img
        src={isLiked ? HeartFilledIcon : HeartIcon}
        alt="like"
        className={styles.like}
        onClick={() => setIsLiked((prev) => !prev)}
      />
      <div className={styles.marks}>
        {marks.map((mark, index) => (
          <div
            key={index}
            className={styles.mark}
            style={{ backgroundColor: `var(--color-mark-${mark})` }}>
            <span>{mark}</span>
          </div>
        ))}
      </div>
      {image ? (
        <img src={image} alt={name} className={styles.productImage} />
      ) : (
        <div className={styles.productImage} />
      )}
      <div className={styles.productText}>
        {children}
        <p className={styles.name}>{name}</p>
      </div>
      <button className={styles.select}>Выбрать</button>
    </div>
  );
};

Product.Price = Price;
