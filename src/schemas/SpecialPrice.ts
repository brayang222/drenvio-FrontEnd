export interface SpecialPrice {
  _id?: string;
  productId: string;
  usersDiscounts: UsersDiscount[];
  discountPercentaje: number;
  validUntil: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UsersDiscount {
  userId: string;
  _id: string;
}
