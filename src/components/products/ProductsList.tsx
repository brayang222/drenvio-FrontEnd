import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products/getAllProducts";
import { Product } from "../../schemas/Product";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product>();

  async function fetchAllProducts() {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData);
      console.log(products);
      return productsData;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      <h1>ProductsList</h1>
    </div>
  );
};
