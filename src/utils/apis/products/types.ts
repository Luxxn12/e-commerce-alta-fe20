import * as z from "zod";

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const base = z.object({
  product_name: z.string().min(1, { message: "product name is requared" }),
  price: z.number().min(1, { message: "price is requared" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  saller: z.string().min(1, { message: "saller is required" }),
  stock: z.number().min(1, { message: "Stock is required" }),
});

export const addProductSchema = z
  .object({
    mode: z.literal("add"),
    product_picture: z
      .instanceof(File)
      .refine((file) => file.name !== "", "Cover image is required")
      .refine(
        (file) => file.size <= MAX_UPLOAD_SIZE,
        `Max image size is ${MAX_MB}MB`
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  })
  .merge(base);

export const editProductSchema = z
  .object({
    mode: z.literal("edit"),
    product_picture: z
      .instanceof(File)
      .refine((file) => file.name !== "", "Cover image is required")
      .refine(
        (file) => file.size <= MAX_UPLOAD_SIZE,
        `Max image size is ${MAX_MB}MB`
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  })
  .merge(base);

export const productSchema = z.discriminatedUnion("mode", [
  addProductSchema,
  editProductSchema,
]);

export type ProductSchema = z.infer<typeof productSchema>;

export interface IProduct {
  id: number;
  product_name: string;
  price: number;
  description: string;
  product_picture: string;
  category: string;
  stock: number;
  seller: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

