import { CalendarDate } from "@heroui/react";

export const handleChange = (
  e:
    | React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    | CalendarDate
    | null,
  setData: React.Dispatch<React.SetStateAction<any>>,
  fieldName?: string
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
    // Es un valor directo de DatePicker
    console.log(`Campo cambiado: ${fieldName}, Nuevo valor: ${e}`);
    setData((prev: any) => ({
      ...prev,
      [fieldName]: e, // Aquí puedes formatearlo como necesites
    }));
  }
};
