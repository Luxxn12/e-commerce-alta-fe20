import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import AppLayout from "../../layouts/app-layout";
import { getProductById } from "../../utils/apis/products/api";
import { formatToRupiah } from "../../utils/formatCurrency";
import { IProductDetail } from "../../utils/apis/products/types";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../utils/apis/contexts/token";

const Show = () => {
  const [product, setProduct] = useState<IProductDetail | null>(null);
  const { addToCart, token } = useAuth();

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
              Seller: {product?.product.seller} | Category:{" "}
              {product?.product.category} | Stock: {product?.product.stock}
            </span>
            <div>
              <p className="text-lg text-lime-600 mb-3">
                {formatToRupiah(product?.product.price ?? 0)}
              </p>
              {token ? (
                <Button onClick={handleAddToCart}>Add to Cart</Button>
              ) : (
                <Link to={'/login'}>
                  <Button>Add to Cart</Button>
                </Link>
              )}

              <div className="my-4">
                <h5 className="text-lg text-neutral-600">Description</h5>
                <p className="text-justify text-neutral-500">
                  {product?.product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Show;
