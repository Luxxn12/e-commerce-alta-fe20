import { Response } from "../../types/api";
import { ILogin, LoginSchema, RegisterSchema } from "../auth/type";
import { realAPI } from "../config/axios-with-config";

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await realAPI.post("/login", body);

    return response.data as Response<ILogin>;
  } catch (error: any) {
    const { message } = error.response.data;

    throw new Error(message);
  }
};

export const userRegister = async (body: RegisterSchema) => {
  try {
    const response = await realAPI.post("/register", body);
    return response.data as Response<any>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
