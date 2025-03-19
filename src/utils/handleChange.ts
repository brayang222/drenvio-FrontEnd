import { CalendarDate } from "@heroui/react";
import { SpecialPrice } from "../schemas/SpecialPrice";

export const handleChange = (
  e:
    | React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    | CalendarDate
    | null,
  setData: React.Dispatch<React.SetStateAction<any>>,
  fieldName?: keyof SpecialPrice
) => {
  if (e && typeof e === "object" && "target" in e) {
    const { name, value } = e.target;
    console.log(`Campo cambiado: ${name}, Nuevo valor: ${value}`);
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  } else if (fieldName) {
    const date = e?.toDate("UTC");
    setData((prev: any) => ({
      ...prev,
      [fieldName]: date?.toISOString(),
    }));
  }
};
