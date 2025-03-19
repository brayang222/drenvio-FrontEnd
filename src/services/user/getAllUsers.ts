import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { BACKEND_URL } from "../../constants";

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: `${BACKEND_URL}/users`,
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
