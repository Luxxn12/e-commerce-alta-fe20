import { Response } from "../../types/api";
import { openAPI } from "../config/axios-with-config";
import { IProduct } from "./types";

export const getProductById = async (product_id: any) => {
  try {
    const response = await openAPI.get<Response<IProduct>>(
      `/products/${product_id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
