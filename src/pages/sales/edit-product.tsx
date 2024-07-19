import { useNavigate } from "react-router-dom";
import { CustomFormField, CustomFormSelect } from "../../components/custom-formfield";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Form } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import AppLayout from "../../layouts/app-layout";
import { useAuth } from "../../utils/apis/contexts/token";
import { useForm } from "react-hook-form";
import {
  productSchema,
  ProductSchema,
} from "../../utils/apis/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {  updateProduct } from "../../utils/apis/products/api";
import { categories } from "../../utils/constant";
import { Loader2 } from "lucide-react";


export default function EditProduct() {

  const { addNotification } = useAuth();
  const navigate = useNavigate();

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      mode: "edit",
      product_name: "",
      product_picture: new File([], ""),
      description: "",
      price: 0,
      category: "",
      stock: 0,
    },
  });

  // useEffect(() => {
  //   setEditData();
  // }, [editData, form.formState.isSubmitSuccessful]);

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form.formState]);

  // async function setEditData() {
  //   let modeType: "add" | "edit" = "add";
  //   if (editData) {
  //     modeType = "edit";

  //     form.setValue("product_name", editData.product_name);
  //     form.setValue("description", editData.description);
  //     form.setValue("price", editData.price);
  //     form.setValue("category", editData.category);
  //     form.setValue("stock", editData.stock);
  //   }

  //   form.setValue("mode", modeType);
  // }

  async function onSubmit(data: ProductSchema, id_product: number) {
    try {
      const response = await updateProduct(data, id_product);
      addNotification(response.message, "success");
      navigate("/my-product");
    } catch (error: any) {
      addNotification(error.message, "error");
    }
  }

  return (
    <AppLayout>
      <div className="flex justify-center">
        <Card className="w-full max-w-xl bg-white rounded-md">
          <CardHeader>
            <CardTitle>Edit Product</CardTitle>
            <CardDescription>
              Fill out the form to edit product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(() =>
                  onSubmit
                )}
                className="grid gap-6"
              >
                <div className="grid gap-2">
                  <CustomFormField
                    control={form.control}
                    name="product_name"
                    label="Product Name"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="Product Name"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                </div>
                <div className="grid gap-2">
                  <CustomFormField
                    control={form.control}
                    name="product_picture"
                    label="Product Picture"
                  >
                    {(field) => (
                      <Input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        multiple={false}
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? e.target.files[0] : null
                          )
                        }
                      />
                    )}
                  </CustomFormField>
                </div>
                <div className="grid gap-2">
                  <CustomFormField
                    control={form.control}
                    name="description"
                    label="Description"
                  >
                    {(field) => (
                      <Textarea
                        {...field}
                        placeholder="Description"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <CustomFormField
                      control={form.control}
                      name="price"
                      label="Price"
                    >
                      {(field) => (
                        <Input
                          {...field}
                          type="number"
                          placeholder="Price"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          value={field.value as string}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <div className="grid gap-2">
                    <CustomFormField
                      control={form.control}
                      name="stock"
                      label="Stock"
                    >
                      {(field) => (
                        <Input
                          {...field}
                          type="number"
                          placeholder="Stock"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          value={field.value as string}
                        />
                      )}
                    </CustomFormField>
                  </div>
                </div>
                <div className="grid gap-2">
                  <CustomFormSelect
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select a Category"
                    options={categories}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
