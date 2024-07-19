import { useEffect, useState } from "react";
import { CardProduct, ProductCardLoading } from "../../components/card-product";
import ProductCategories from "../../components/product-categories";
import AppLayout from "../../layouts/app-layout";
import { useAuth } from "../../utils/apis/contexts/token";
import { IProduct } from "../../utils/apis/products/types";
// import { getProduct } from "../../utils/apis/products/api";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState<IProduct[]>([])
  const [isLoading, setLoading] = useState(true)
  const { addNotification } = useAuth()

  // async function fetchData() {
  //   setLoading(true)
  //   try {
  //     const response = await getProduct()
  //     setData(response.data)
  //   } catch (error: any) {
  //     addNotification(error.message, "error");
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  async function fetchData() {
    setLoading(true)
    try {
      const response = await axios.get('https://one.ybtech.online/products?all=true')
      setData(response.data.data)
    } catch (error: any) {
      addNotification(error.message, "error");
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppLayout>
      <div className="container lg:px-24 lg:py-12 py-6">
        <h5 className="lg:text-3xl md:text-2xl text-xl font-semibold text-neutral-700">
          Our products
        </h5>
        <div className="mt-4 lg:w-1/2 md:w-3/4 w-full">
          <input
            type="text"
            id="search"
            className="bg-white border border-neutral-300 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
            placeholder="Type to search or sort by category..."
          />
        </div>
        <div className="mt-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5">
          <ProductCategories />
        </div>
        </div>

        <div>
          <div className="mt-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center gap-4 py-10 pt-0">
            {isLoading ? (
              [...Array(8).keys()].map((key) => <ProductCardLoading key={key} />)
            ) : (
              <>
                {data.map((product) => {
                  return (
                    <CardProduct
                      key={product.id}
                      data={product}
                      navigation={`/product/${product.id}`}
                      data-testid={`detail-other-procudt`}
                      className="border border-neutral-200 shadow"
                    />
                  );
                })}
              </>
            )
            }
          </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Products;
