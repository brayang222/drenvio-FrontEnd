export const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
  setData: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value } = e.target;
  console.log(`Campo cambiado: ${name}, Nuevo valor: ${value}`);
  setData((prev: any) => ({
    ...prev,
    [name]: value,
  }));
};
