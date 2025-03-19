import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { BACKEND_URL } from "../../constants";

export const deleteSpecialPrices = async (id: string) => {
  try {
    const options = {
      method: "DELETE",
      url: `${BACKEND_URL}/specialPrice/delete/${id}`,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
