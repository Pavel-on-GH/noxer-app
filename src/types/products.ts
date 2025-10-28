export interface IProductResponse {
  products: IProductFromServer[];
  pagination: { has_next: boolean };
}

export type Mark = 'sale' | 'hit' | 'new' | 'discount' | 'premium' | 'предзаказ';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  oldPrice: number | null;
  marks: Mark[];
  hasMore: boolean;
}

export interface IProductFromServer {
  id: number;
  images: IProductImage[];
  marks: IMark[];
  name: string;
  old_price: number | null;
  price: number;
}

export interface IProductImage {
  Image_ID: number;
  Image_URL: string;
  MainImage: boolean;
  Product_ID: number;
  position: string;
  sort_order: number;
  title: string;
}

export interface IMark {
  Mark_Name: Mark;
  color_code: null;
}
