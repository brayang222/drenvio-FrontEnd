import { useEffect } from "react";
import { SpecialPriceCard } from "./SpecialPriceCard";
import ModalWithForm from "../forms/FormWithModal";
import { FormSpecialPrice } from "../forms/FormSpecialPrice";
import { useSpecialPrices } from "../../hooks/useSpecialPrices";
import { useProducts } from "../../hooks/useProducts";
import { useUsers } from "../../hooks/useUsers";

export const SpecialPriceList = () => {
  const {
    specialPrices,
    deleteSpecialPrice,
    editSpecialPrice,
    createSpecialPrice,
    fetchSpecialPrices,
  } = useSpecialPrices();
  const { products, fetchProducts } = useProducts();
  const { users, fetchUsers } = useUsers();

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
