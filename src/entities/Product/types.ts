import { IProduct } from '../../types/products';
import { ReactNode } from 'react';

export interface IProductProps extends IProduct {
  children: ReactNode;
}

export interface IPriceProps {
  price: number;
  oldPrice: number | null;
  className?: string;
}
