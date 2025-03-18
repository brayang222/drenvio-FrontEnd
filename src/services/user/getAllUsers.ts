import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: "http://localhost:5100/users",
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
