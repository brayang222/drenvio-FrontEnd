import { toast } from "sonner";
import { Product } from "../../schemas/Product";

export const ProductCard = ({ product }: { product: Product }) => {
  const { name, description, category, price, stock, discounts } = product;

  const handleDiscount = (price: number) => {
    const discountPercentaje = discounts?.discountPercentaje;
    const discountMoney = (price * discountPercentaje!) / 100;

    return price - discountMoney;
  };

  return (
    <div className="bg-secondary flex flex-col justify-between w-full max-w-80 border-2 border-primary rounded-lg shadow-sm hover:shadow-md transition-all p-4">
      <section>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            {category && (
              <span className="inline-block mt-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                {category}
              </span>
            )}
          </div>
          {discounts?.usersDiscounts ? (
            <div className="flex gap-1">
              <p className="text-xl font-bold">${handleDiscount(price)}</p>
              <p className="text-lg text-gray-400 font-bold line-through lin">
                ${price}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold">${price}</p>
          )}
        </div>

        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </section>
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`text-sm ${stock ? "text-green-600" : "text-red-600"}`}
        >
          {stock ? "Disponible" : "Agotado"}
        </span>
        <button
          onClick={() => {
            toast.success(`${name} agregado al carrito`);
          }}
          disabled={!stock}
          className={`px-4 py-2 rounded-2xl text-sm ${
            stock
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
