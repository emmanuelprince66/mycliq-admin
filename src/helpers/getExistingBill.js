import axios from "axios";
import { AuthAxios } from "./axiosInstance";
export const getExistingBill = async (id) => {
  const existingBill = await AuthAxios({
    url: `/association-bill/all/${id}`,
    method: "GET",
  });
  return existingBill?.data;
};
