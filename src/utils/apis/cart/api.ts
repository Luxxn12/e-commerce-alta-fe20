import { Response } from "../../types/api";
import { realAPI, setAxiosConfig } from "../config/axios-with-config";
import { ICart } from "./type";

const token = localStorage.getItem("token");

export const getCart = async () => {
  try {
    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    setAxiosConfig(token);

    const response = await realAPI.get<Response<ICart>>("/cart");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (product_id: number = 5) => {
  try {
    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    setAxiosConfig(token);

    const response = await realAPI.post("/cart", { product_id: product_id });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItem = async (cart_id: number = 5) => {
  const token = localStorage.getItem("token");
  try {
    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    setAxiosConfig(token);

    const response = await realAPI.delete("/cart", {
      data: { cart_id },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
