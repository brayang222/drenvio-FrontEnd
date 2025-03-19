import { useState } from "react";
import { handleChange } from "../../utils/handleChange";
import { useModalContext } from "../../context/ModalContext";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { Product } from "../../schemas/Product";
import { DatePicker, Select, SelectItem } from "@heroui/react";
import { User } from "../../schemas/User";
import { parseDate } from "@internationalized/date";

export const FormSpecialPrice = ({
  specialPrice,
  products,
  users,
  variant,
  onEdit,
  onCreate,
}: {
  specialPrice?: SpecialPrice;
  products: Product[];
  users: User[];
  variant: "create" | "update";
  onEdit?: (id: string, specialPrice: SpecialPrice) => void;
  onCreate?: (specialPrice: SpecialPrice) => void;
}) => {
  const [formData, setFormData] = useState<SpecialPrice>(
    specialPrice || {
      discountPercentaje: 0,
      productId: { _id: "" },
      usersDiscounts: [],
      validUntil: new Date(),
    }
  );
  const { closeModal } = useModalContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (variant === "update" && onEdit) {
      onEdit(specialPrice!._id as string, formData);
      closeModal();
    } else if (variant === "create" && onCreate) {
      onCreate(formData);
      closeModal();
    }
  };

  const handleUserSelectionChange = (keys: any) => {
    const selectedKeys = Array.isArray(keys) ? keys : Array.from(keys);
    setFormData((prev) => ({
      ...prev,
      usersDiscounts: selectedKeys.map((id) => ({
        userId: { _id: String(id) },
      })),
    }));
  };

  const selectedUsers = specialPrice?.usersDiscounts.map(
    (user) => user.userId._id
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="">
        <label
          htmlFor="discountPercentaje"
          className="block mb-2 font-medium text-primary"
        >
          Porcentaje
        </label>
        <input
          type="number"
          id="discountPercentaje"
          name="discountPercentaje"
          defaultValue={formData?.discountPercentaje}
          onChange={(e) => handleChange(e, setFormData)}
          required
          className="w-full px-3 py-2 text-primary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="">
        <label
          htmlFor="productId"
          className="block mb-2 font-medium text-primary"
        >
          Producto
        </label>
        <select
          id="productId"
          name="productId"
          required
          defaultValue={formData?.productId._id}
          onChange={(e) => handleChange(e, setFormData)}
          className="w-full text-primary px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          {products &&
            products.map((product) => (
              <option
                value={product._id}
                key={product._id}
                className="cursor-pointer"
              >
                {product.name}
              </option>
            ))}
        </select>
      </div>

      <Select
        label="Usuario"
        defaultSelectedKeys={selectedUsers}
        labelPlacement="outside"
        variant="bordered"
        placeholder="Selecciona un usuario"
        selectionMode="multiple"
        onSelectionChange={handleUserSelectionChange}
      >
        {users.map((user) => (
          <SelectItem key={user._id} textValue={user.email}>
            {user.email}{" "}
          </SelectItem>
        ))}
      </Select>

      <div className="w-full max-w-xl flex flex-row gap-4">
        <DatePicker
          name="validUntil"
          hideTimeZone
          showMonthAndYearPickers
          inert={true}
          defaultValue={parseDate(
            new Date(formData?.validUntil || Date.now())
              .toISOString()
              .split("T")[0]
          )}
          label="Válido hasta:"
          variant="bordered"
          onChange={(e) => handleChange(e, setFormData, "validUntil")}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-primary text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
