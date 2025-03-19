export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  brand: string;
  sku: string;
  tags: string[];
  discounts?: Discounts;
  createdAt: Date;
  updatedAt: Date;
}

export interface Discounts {
  usersDiscounts: UsersDiscount[];
  discountPercentaje: number;
}

export interface UsersDiscount {
  userId: string;
  _id: string;
}
