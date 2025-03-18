import { AxiosError } from "axios";

export const errorHandler = (error: Error | unknown) => {
  if (error instanceof AxiosError && error.response?.status === 404) {
    throw new Error("NOT_FOUND");
  }
  if (error instanceof AxiosError && error.response) {
    throw error.response.data.error;
  }
  throw new Error("An unknown error occurred");
};
