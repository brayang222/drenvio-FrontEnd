import axios, { AxiosError } from "axios";
import { User } from "../../schemas/User";
import { BACKEND_URL } from "../../constants";

export const createUser = async (user: User) => {
  try {
    const options = {
      method: "POST",
      url: `${BACKEND_URL}/users/register`,
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (error instanceof AxiosError && error.response) {
      throw error.response.data.error;
    }
    throw new Error("An unknown error occurred");
  }
};
