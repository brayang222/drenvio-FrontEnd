import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

export const ProductsList = () => {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products) return <div className="p-8 text-3xl">Cargando...</div>;

  return (
    <main className="flex flex-col w-screen h-screen bg-white-custom">
      <div className="flex flex-col w-full h-full p-8 gap-4">
        <h4 className="text-3xl font-medium">Lista de artículos</h4>
        <section className="flex gap-4 flex-wrap">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </section>
      </div>
    </main>
  );
};
