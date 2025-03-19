import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export const deleteSpecialPrices = async (id: string) => {
  try {
    const options = {
      method: "DELETE",
      url: `http://localhost:5100/specialPrice/delete/${id}`,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
