import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import AppLayout from "../../layouts/app-layout";
import { getProductById } from "../../utils/apis/products/api";
import { IProduct } from "../../utils/apis/products/types";
import { formatToRupiah } from "../../utils/formatCurrency";
import { IProductDetail } from "../../utils/apis/products/types";
import { getDetailProduct } from "../../utils/apis/products/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../utils/apis/contexts/token";

const Show = () => {

  const [product, setProduct] = useState<IProduct | null>(null);
  const { addToCart } = useAuth();

  const params = useParams();
  const [isProduct, setProduct] = useState<IProductDetail>() 
  const { addNotification } = useAuth()


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

  const handleAddToCart = () => {
    if (product) {
      addToCart(product_id).then(() => {
        console.log("sukses");
      });
    }
  };

  return (
    <AppLayout>
      <section className="container mx-auto lg:py-12 py-6">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <img

              src="https://akcdn.detik.net.id/visual/2023/10/26/samsung-s23-fe-cnbc-indonesiafaisal-rahman-6_169.jpeg?w=715&q=90"
              alt="Samsung Galaxy S23 FE"

              src={isProduct?.product.product_picture}
              alt={isProduct?.product.product_name}

              className="rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <h1 className="font-semibold text-xl text-neutral-700">

              {product?.product_name}
            </h1>
            <span className="text-sm text-neutral-400">
              Seller: {product?.seller} | Category: {product?.category} | Stock:{" "}
              {product?.stock}
            </span>
            <div>
              <p className="text-lg text-lime-600 mb-3">
                {formatToRupiah(product?.price ?? 0)}
              </p>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
                
                
              {isProduct?.product.product_name}
            </h1>
            <span className="text-sm text-neutral-400">
              Seller: {isProduct?.product?.seller} | Category: {isProduct?.product.category} | Stock: {isProduct?.product.stock}
            </span>
            <div>
              <p className="text-lg text-lime-600 mb-3">{isProduct?.product.price}</p>
              <Button>Add to Cart</Button>

            </div>

            <div className="my-4">
              <h5 className="text-lg text-neutral-600">Description</h5>
              <p className="text-justify text-neutral-500">

                {isProduct?.product.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Show;
