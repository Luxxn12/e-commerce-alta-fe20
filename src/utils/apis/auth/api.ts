import { Response } from "../../types/api";
import { ILogin, LoginSchema, RegisterSchema } from "../auth/type";
import axiosWithConfig from "../config/axios-with-config";

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post("/login", body);

    console.log("api", response);

    return response.data as Response<ILogin>;
  } catch (error: any) {
    const { message } = error.response.data;

    throw new Error(message);
  }
};

export const userRegister = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post("/register", body);
    return response.data as Response<any>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
