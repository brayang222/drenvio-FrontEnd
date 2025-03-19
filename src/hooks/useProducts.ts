import { toast } from "sonner";
import { getAllProducts } from "../services/products/getAllProducts";
import { useState } from "react";
import { Product } from "../schemas/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  async function fetchProducts() {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  return { products, fetchProducts };
};
