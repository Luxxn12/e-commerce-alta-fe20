
import { useEffect, useState } from "react";
import AppLayout from "../../layouts/app-layout";
import { IProductDetail } from "../../utils/apis/products/types";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/apis/products/api";


export default function DetailProduct() {
  const [product, setProduct] = useState<IProductDetail | null>(null);

  // const params = useParams();
  // const [isProduct, setProduct] = useState<IProductDetail>() 
  // const { addNotification } = useAuth()


  const { product_id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(product_id);
      setProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  };

  return (
    <AppLayout>
           <section className="container mx-auto lg:py-12 py-6">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 max-w-md md:max-w-xl p-4">
          <img
              src={product?.product.product_picture}
              alt={product?.product.product_name}
              className="rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <h1 className="font-semibold text-xl text-neutral-700">
            {product?.product.product_name}
            </h1>
            <span className="text-sm text-neutral-400">
            Seller: {product?.product.seller} | Category: {product?.product.category} | Stock:{" "}
            {product?.product.stock}
            </span>

            <div className="my-4">
              <h5 className="text-lg text-neutral-600">Description</h5>
              <p className="text-justify text-neutral-500">
              {product?.product.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

