export interface ICartItem {
  cart_id: number;
  product_name: string;
  product_picture: string;
  quantity: number;
  sub_total: number;
}

export interface ICart {
  transaction_id: number;
  user_id: number;
  status: string;
  cart_items: ICartItem[];
  length: boolean
}
