import axios from "axios";
import { AuthAxios } from "./axiosInstance";
export const getUser = async (token) => {
  const user = await AuthAxios({
    url: "/admin/user",
    method: "GET",
    headers:{
    'Authorization':`Bearer ${token}`
    }
  });
  return user?.data;
};
