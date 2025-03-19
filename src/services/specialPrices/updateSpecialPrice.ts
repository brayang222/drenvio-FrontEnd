import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { BACKEND_URL } from "../../constants";

export const updateSpecialPrice = async (
  id: string,
  updatedSpecialPrice: SpecialPrice
) => {
  try {
    const options = {
      method: "PATCH",
      url: `${BACKEND_URL}/specialPrice/update/${id}`,
      data: updatedSpecialPrice,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
