import { CalendarDate } from "@heroui/react";
import { SpecialPrice } from "../schemas/SpecialPrice";

export const handleChange = (
  e:
    | React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    | CalendarDate
    | null,
  setData: React.Dispatch<React.SetStateAction<SpecialPrice>>,
  fieldName?: keyof SpecialPrice
) => {
  if (e && typeof e === "object" && "target" in e) {
    // Es un evento de input
    const { name, value } = e.target;
    console.log(`Campo cambiado: ${name}, Nuevo valor: ${value}`);
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  } else if (fieldName) {
    // Evento del DatePicker (CalendarDate)
    const date = e?.toDate("UTC"); // Convierte CalendarDate a Date
    setData((prev) => ({
      ...prev,
      [fieldName]: date?.toISOString(),
    }));
  }
};
