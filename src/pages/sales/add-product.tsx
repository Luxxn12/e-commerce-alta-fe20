import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import AppLayout from "../../layouts/app-layout";
import { useAuth } from "../../utils/apis/contexts/token";
// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productSchema, ProductSchema } from "../../utils/apis/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProduct } from "../../utils/apis/products/api";
import { Form } from "../../components/ui/form";
import {
  CustomFormField,
  CustomFormSelect,
} from "../../components/custom-formfield";
import { categories } from "../../utils/constant";
import { Loader2 } from "lucide-react";

export default function AddProduct() {
  const { addNotification } = useAuth();
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      product_name: "",
      product_picture: new File([], ""),
      description: "",
      price: 0,
      category: "",
      stock: 0,
    },
  });

  async function onSubmit(data: ProductSchema) {
    // setIsLoading(true)
    try {
      const response = await addProduct(data);

      addNotification(response.message, "success");
      navigate("/sales");
    } catch (error: any) {
      addNotification(error.message, "error");
    }
  }

  return (
    <AppLayout>
      <div className="flex justify-center">
        <Card className="w-full max-w-xl bg-white rounded-md">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>
              Fill out the form to add a new product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-6"
              >
                <div className="grid gap-2">
                  {/* <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" /> */}
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
                  {/* <Label htmlFor="picture">Product Picture</Label>
                  <Input id="picture" type="file" /> */}
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
                  {/* <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter product description" className="min-h-[100px]" /> */}
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
                    {/* <Label htmlFor="price">Price</Label>
                    <Input id="price" type="number" placeholder="Enter price" /> */}
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
                    {/* <Label htmlFor="stock">Stock</Label>
                    <Input id="stock" type="number" placeholder="Enter stock" /> */}
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
                  {/* <Label htmlFor="category">Category</Label>
                  <Select >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select> */}
                  <CustomFormSelect
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select a Category"
                    options={categories}
                  />
                </div>
                {/* <Button className="ml-auto">Add Product</Button> */}
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitted ? (
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
