import { useState } from "react";
import { SpecialPrice } from "../schemas/SpecialPrice";
import { getAllSpecialPrices } from "../services/specialPrices/getAllSpecialPrices";
import { deleteSpecialPrices } from "../services/specialPrices/deleteSpecialPrices";
import { updateSpecialPrice } from "../services/specialPrices/updateSpecialPrice";
import { createSpecialPrices } from "../services/specialPrices/createSpecialPrices";
import { toast } from "sonner";

export const useSpecialPrices = () => {
  const [specialPrices, setSpecialPrices] = useState<SpecialPrice[]>([]);

  async function fetchSpecialPrices() {
    try {
      const specialPricesData = await getAllSpecialPrices();
      setSpecialPrices(specialPricesData);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  async function deleteSpecialPrice(id: string) {
    try {
      await deleteSpecialPrices(id);
      fetchSpecialPrices();
      toast.success("Precio especial eliminado");
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  async function editSpecialPrice(id: string, specialPrice: SpecialPrice) {
    try {
      await updateSpecialPrice(id, specialPrice);
      fetchSpecialPrices();
      toast.success("Precio especial editado");
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  async function createSpecialPrice(specialPrice: SpecialPrice) {
    try {
      await createSpecialPrices(specialPrice);
      fetchSpecialPrices();
      toast.success("Precio especial creado");
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  return {
    specialPrices,
    deleteSpecialPrice,
    editSpecialPrice,
    createSpecialPrice,
    fetchSpecialPrices,
  };
};
