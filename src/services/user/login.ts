import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";
import { BACKEND_URL } from "../../constants";

export const login = async (user: { email: string; password: string }) => {
  try {
    const options = {
      method: "POST",
      url: `${BACKEND_URL}/users/login/`,
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
