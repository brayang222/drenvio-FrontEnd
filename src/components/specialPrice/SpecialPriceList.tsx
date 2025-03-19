import { useEffect, useState } from "react";
import { getAllSpecialPrices } from "../../services/specialPrices/getAllSpecialPrices";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { SpecialPriceCard } from "./SpecialPriceCard";
import { updateSpecialPrice } from "../../services/specialPrices/updateSpecialPrice";
import { Product } from "../../schemas/Product";
import { getAllProducts } from "../../services/products/getAllProducts";
import { User } from "../../schemas/User";
import { getAllUsers } from "../../services/user/getAllUsers";
import ModalWithForm from "../forms/FormWithModal";
import { FormSpecialPrice } from "../forms/FormSpecialPrice";
import { createSpecialPrices } from "../../services/specialPrices/createSpecialPrices";
import { deleteSpecialPrices } from "../../services/specialPrices/deleteSpecialPrices";

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
      await deleteSpecialPrices(id);
      fetchSpecialPrices();
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
      const createdSpecialPrice = await createSpecialPrices(specialPrice);
      console.log(createdSpecialPrice);
      fetchSpecialPrices();
      return createSpecialPrice;
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
      <div className="flex w-full justify-between">
        <h4 className="text-2xl font-bold">Precios especiales:</h4>
        <ModalWithForm
          classes="flex gap-2 items-center bg-primary text-white font-medium py-2 px-4 rounded-md transition-colors"
          localize={{
            title: "Nuevo precio especial",
            buttonText: "Nuevo",
            description:
              "Rellena todos los campos de el precio especial. Dale a 'crear' cuando termines.",
          }}
          icon={
            <i
              className="icon-[tabler--new-section] text-xl"
              role="img"
              aria-hidden="true"
            />
          }
        >
          <FormSpecialPrice
            onCreate={createSpecialPrice}
            variant="create"
            products={products}
            users={users}
          />
        </ModalWithForm>
      </div>
      <section className="flex gap-4 flex-wrap">
        {specialPrices.map((specialPrice) => (
          <SpecialPriceCard
            key={specialPrice._id}
            specialPrice={specialPrice}
            products={products}
            users={users}
            onDelete={deleteSpecialPrice}
            onEdit={editSpecialPrice}
          />
        ))}
      </section>
    </main>
  );
};
