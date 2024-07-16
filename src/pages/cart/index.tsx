import { EllipsisVertical } from "lucide-react";
import AppLayout from "../../layouts/app-layout";
import { useState } from "react";
import { Button } from "../../components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Samsung Galaxy S23 FE 128/8 Mint Garansi Resmi SEIN",
      image:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-140418322/samsung_samsung_galaxy_s23_fe_8-128gb_full02_u40hjv1c.jpg",
      price: 10399000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Asus ROG Zephyrus M16",
      image:
        "https://ecommerce.datablitz.com.ph/cdn/shop/products/0197105087866_600x.jpg?v=1679723253",
      price: 5000000,
      quantity: 1,
    },
  ]);

  const incrementQuantity = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };

  const calculateTotalItems = () => {
    return products.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  };

  return (
    <AppLayout>
      <div className="container lg:px-24 lg:py-12 py-6">
        <h5 className="text-xl font-semibold text-neutral-700">My Cart</h5>
        <p className="text-neutral-500">
          Review and manage items in your shopping cart before proceeding to
          checkout.
        </p>
        <div className="relative overflow-x-auto my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md text-neutral-700 bg-transparent border-b border-neutral-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-transparent border-b border-neutral-300  dark:bg-gray-800 dark:border-gray-700"
                >
                  <th scope="row" className="px-6 py-4">
                    <img
                      src={product.image}
                      alt="product-image"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </th>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => decrementQuantity(product.id)}
                        className="text-neutral-500 hover:text-neutral-700 focus:outline-none text-3xl"
                      >
                        -
                      </button>
                      <span className="mx-2 text-neutral-700">{product.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(product.id)}
                        className="text-neutral-500 hover:text-neutral-700 focus:outline-none text-2xl"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    Rp. {product.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <EllipsisVertical />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-right">
          <div className="mb-3">
            <p className="text-lg text-neutral-600">
              Total Items: {calculateTotalItems()}
            </p>
            <p className="text-lg text-neutral-600">
              Grand total: <strong className="text-lime-600">Rp.15.499.000</strong>
            </p>
          </div>
          <Button>Checkout</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Cart;
