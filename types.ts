export interface Variation {
  name: string;
  price: string;
}

export interface Product {
  name: string;
  variations: Variation[];
}

export interface MenuCategory {
  id: string;
  title: string;
  products: Product[];
}
