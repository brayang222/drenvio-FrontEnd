import { useEffect, useState } from "react";
import { getAllSpecialPrices } from "../../services/specialPrices/getAllSpecialPrices";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { SpecialPriceCard } from "./SpecialPriceCard";
import { updateSpecialPrice } from "../../services/specialPrices/updateSpecialPrice";
import { Product } from "../../schemas/Product";
import { getAllProducts } from "../../services/products/getAllProducts";
import { User } from "../../schemas/User";
import { getAllUsers } from "../../services/user/getAllUsers";

export const SpecialPriceList = () => {
  const [specialPrices, setSpecialPrices] = useState<SpecialPrice[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  async function fetchSpecialPrices() {
    try {
      const specialPricesData = await getAllSpecialPrices();
      setSpecialPrices(specialPricesData);
      return specialPricesData;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteSpecialPrice(id: string) {
    try {
      const deletedSpecialPrice = await deleteSpecialPrice(id);
      console.log(deletedSpecialPrice);
      fetchSpecialPrices();
      return deleteSpecialPrice;
    } catch (error) {
      console.error(error);
    }
  }

  async function editSpecialPrice(id: string, specialPrice: SpecialPrice) {
    try {
      const editedSpecialPrice = await updateSpecialPrice(id, specialPrice);
      console.log("Edited: ", specialPrice);
      fetchSpecialPrices();
      return editedSpecialPrice;
    } catch (error) {
      console.error(error);
    }
  }

  async function createSpecialPrice(specialPrice: SpecialPrice) {
    try {
      const createdSpecialPrice = await createSpecialPrice(specialPrice);
      console.log(createdSpecialPrice);
      fetchSpecialPrices();
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchProducts() {
    try {
      const productsData = await getAllProducts();
      console.log(productsData);
      setProducts(productsData);
      return productsData;
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUsers() {
    try {
      const usersData = await getAllUsers();
      console.log(usersData);
      setUsers(usersData);
      return usersData;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSpecialPrices();
    fetchProducts();
    fetchUsers();
  }, []);

  if (!specialPrices) return <div> Cargando...</div>;

  return (
    <main className="flex flex-col w-screen h-screen p-8 gap-4 bg-primary-50">
      <h4 className="text-2xl font-bold">Descuentos:</h4>
      {specialPrices.map((specialPrice) => (
        <SpecialPriceCard
          specialPrice={specialPrice}
          products={products}
          users={users}
          key={specialPrice._id}
          onDelete={deleteSpecialPrice}
          onEdit={editSpecialPrice}
          onCreate={createSpecialPrice}
        />
      ))}
    </main>
  );
};
