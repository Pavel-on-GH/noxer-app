import React, { useState } from 'react';
import HomeIcon from '../../assets/icons/home.svg';
import CatalogIcon from '../../assets/icons/catalog.svg';
import FavoriteIcon from '../../assets/icons/favorite.svg';
import CartIcon from '../../assets/icons/cart.svg';
import AccountIcon from '../../assets/icons/account.svg';
import styles from './Menu.module.scss';
import clsx from 'clsx';

interface IMenuItem {
  icon: string;
  label: string;
}

const menuItems: IMenuItem[] = [
  { icon: HomeIcon, label: 'Главная' },
  { icon: CatalogIcon, label: 'Каталог' },
  { icon: FavoriteIcon, label: 'Избранное' },
  { icon: CartIcon, label: 'Корзина' },
  { icon: AccountIcon, label: 'Аккаунт' },
];

export const Menu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.menu}>
      {menuItems.map(({ icon, label }, idx) => (
        <img
          key={label}
          src={icon}
          alt={label}
          className={clsx(styles.icon, { [styles.active]: idx === activeIndex })}
          onClick={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  );
};
