import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export const getAllProducts = async () => {
  try {
    const options = {
      method: "GET",
      url: "http://localhost:5100/products",
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
