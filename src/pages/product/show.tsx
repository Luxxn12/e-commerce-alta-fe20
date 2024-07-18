import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import AppLayout from "../../layouts/app-layout";
import { IProduct } from "../../utils/apis/products/types";
import { getDetailProduct } from "../../utils/apis/products/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../utils/apis/contexts/token";

const Show = () => {
  const params = useParams();
  const [isProduct, setProduct] = useState<IProduct>() 
  const { addNotification } = useAuth()


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailProduct(params.id_product!)
      setProduct(response.data)
    } catch (error: any) {
      addNotification(error.message, "error");
    }
  }

  return (
    <AppLayout>
      <section className="container mx-auto lg:py-12 py-6">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <img
              src={isProduct?.product_picture}
              alt={isProduct?.product_name}
              className="rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <h1 className="font-semibold text-xl text-neutral-700">
              {isProduct?.product_name}
            </h1>
            <span className="text-sm text-neutral-400">
              Seller: Username | Category: {isProduct?.category} | Stock: {isProduct?.stock}
            </span>
            <div>
              <p className="text-lg text-lime-600 mb-3">{isProduct?.price}</p>
              <Button>Add to Cart</Button>
            </div>

            <div className="my-4">
              <h5 className="text-lg text-neutral-600">Description</h5>
              <p className="text-justify text-neutral-500">
                {isProduct?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Show;
