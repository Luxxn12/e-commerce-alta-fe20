import { Response } from "../../types/api";
import axiosWithConfig, { setAxiosConfig } from "../config/axios-with-config";
import { UserProfile } from "./type";

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    setAxiosConfig(token);

    const response = await axiosWithConfig.get<Response<UserProfile>>("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
