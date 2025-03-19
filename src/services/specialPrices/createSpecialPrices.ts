import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { SpecialPrice } from "../../schemas/SpecialPrice";
import { BACKEND_URL } from "../../constants";

export const createSpecialPrices = async (specialPrice: SpecialPrice) => {
  try {
    const options = {
      method: "POST",
      url: `${BACKEND_URL}/specialPrice/create`,
      data: specialPrice,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
