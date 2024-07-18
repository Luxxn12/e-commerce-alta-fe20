export interface IProduct {
  id: number;
  product_name: string;
  price: number;
  description: string;
  product_picture: string;
  category: string;
  stock: number;
  seller: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
