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

import { checkProperty, valueFormatData } from "../../functions";
import {  Response } from "../../types/api";
import axiosWithConfig from "../config/axios-with-config";
import { IProduct, ProductSchema } from "./types";

export const getProduct = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = `?${queryParams.join("&")}`;
    }

    const url = query ? `/products?${query}` : "/products";

    const response = await axiosWithConfig.get(url);

    return response.data as Response<IProduct[]>;
  } catch (error: any) {
    const { message } = error.response.data.message;
    throw Error(message);
  }
};

export const getDetailProduct = async (id_product: string) => {
  try {
    const response = await axiosWithConfig.get(`/products/${id_product}`);
    return response.data as Response<IProduct>;
  } catch (error: any) {
    const { message } = error.response.data.message;
    throw new Error(message);
  }
};

export const addProduct = async (body: ProductSchema) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;

    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }
    const response = await axiosWithConfig.post(`/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as Response<any>
  } catch (error: any) {
    const { message } = error.response.data.message;
    throw new Error(message);
  }
};

export const updateProduct = async (
  body: ProductSchema,
  id_product: number
) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }

    const response = await axiosWithConfig.put(
      `/products/${id_product}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data as Response;
  } catch (error: any) {
    const { message } = error.response.data.message;
    throw new Error(message);
  }
};

export const deleteProduct = async (id_product: string) => {
  try {
    const response = await axiosWithConfig.delete(`/products/${id_product}`);

    return response.data as Response;
  } catch (error: any) {
    const { message } = error.response.data.message;
    throw new Error(message);
  }
};
