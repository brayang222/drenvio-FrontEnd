import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { SpecialPrice } from "../../schemas/SpecialPrice";

export const updateSpecialPrice = async (
  id: string,
  updatedSpecialPrice: SpecialPrice
) => {
  try {
    const options = {
      method: "PATCH",
      url: `http://localhost:5100/specialPrice/update/${id}`,
      data: updatedSpecialPrice,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
