export interface SpecialPrice {
  _id?: string;
  productId: ProductID;
  usersDiscounts: UsersDiscount[];
  discountPercentaje: number;
  validUntil: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductID {
  _id: string;
  name?: string;
}

export interface UsersDiscount {
  userId: UserID;
  _id?: string;
}

export interface UserID {
  _id: string;
  email?: string;
}
