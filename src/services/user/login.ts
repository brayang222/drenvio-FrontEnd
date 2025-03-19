import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export const login = async (user: { email: string; password: string }) => {
  try {
    const options = {
      method: "POST",
      url: `http://localhost:5100/users/login/`,
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
