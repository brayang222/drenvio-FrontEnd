import { useState } from "react";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { formatDate } from "../../utils/formatDate";
import ModalWithForm from "../forms/FormWithModal";
import { FormSpecialPrice } from "../forms/FormSpecialPrice";
import { Product } from "../../schemas/Product";
import { User } from "../../schemas/User";

export const SpecialPriceCard = ({
  specialPrice,
  products,
  users,
  onEdit,
  onDelete,
  onCreate,
}: {
  specialPrice: SpecialPrice;
  products: Product[];
  users: User[];
  onEdit: (id: string, specialPrice: SpecialPrice) => void;
  onDelete: (id: string) => void;
  onCreate: (specialPrice: SpecialPrice) => void;
}) => {
  const [showUsers, setShowUsers] = useState(false);
  const { discountPercentaje, usersDiscounts, productId } = specialPrice;
  const isValid = new Date(specialPrice.validUntil) > new Date();

  return (
    <div className="flex flex-col w-full max-w-80 rounded-lg shadow-sm hover:shadow-md transition-all p-4 bg-secondary border-2 border-primary">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">
            {discountPercentaje}%
          </span>
          <span className="ml-2 text-sm text-gray-600">Descuento</span>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            isValid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isValid ? "Active" : "Expired"}
        </span>
      </div>

      {/* Product information */}
      <div className="mb-3">
        <p className="text-sm text-primary font-bold">ID Producto:</p>
        <p className="font-normal truncate text-gray-600">{productId._id}</p>
        <p className="font-normal truncate text-gray-600">{productId.name}</p>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold">Usuarios:</p>
          <button
            onClick={() => setShowUsers(!showUsers)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {showUsers ? "Ocultar" : "Mostrar"} (
            {specialPrice.usersDiscounts.length})
          </button>
        </div>

        {showUsers && (
          <div className="mt-2 pl-2 border-l-2 border-gray-200">
            {usersDiscounts.length > 0 ? (
              <ul className="space-y-1">
                {usersDiscounts.map((user) => (
                  <li key={user._id} className="text-xs text-gray-600">
                    <span className="font-bold">Email:</span>{" "}
                    {user.userId.email}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-500 italic">
                No hay usuarios en este descuento
              </p>
            )}
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
        <div>
          <p className="text-primary font-bold">Creado:</p>
          <p>{formatDate(specialPrice.createdAt)}</p>
        </div>
        <div>
          <p className="text-primary font-bold">Validez:</p>
          <p>{formatDate(specialPrice.validUntil)}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-2 mt-2">
        <ModalWithForm
          classes="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          localize={{
            title: "Editar precio especial",
            buttonText: "Editar",
            description:
              "Edita el precio especial. Dale a 'guardar' cuando termines.",
          }}
        >
          <FormSpecialPrice
            variant="update"
            specialPrice={specialPrice}
            onEdit={onEdit}
            products={products}
            users={users}
          />
        </ModalWithForm>
        <button
          onClick={() => onDelete(specialPrice._id as string)}
          className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
