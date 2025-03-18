import { useEffect, useState } from "react";
import { getAllSpecialPrices } from "../../services/specialPrices/getAllSpecialPrices";
import { SpecialPrice } from "../../schemas/SpecialPrice";

export const SpecialPriceList = () => {
  const [specialPrices, setSpecialPrices] = useState<SpecialPrice>();

  async function fetchSpecialPrices() {
    try {
      const specialPricesData = await getAllSpecialPrices();
      setSpecialPrices(specialPricesData);
      console.log(specialPrices);
      return specialPricesData;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSpecialPrices();
  }, []);

  return <div>SpecialPriceList</div>;
};
