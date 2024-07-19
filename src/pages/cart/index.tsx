import AppLayout from "../../layouts/app-layout";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { ICart } from "../../utils/apis/cart/type";
import { getCart, deleteCartItem } from "../../utils/apis/cart/api";
import { formatToRupiah } from "../../utils/formatCurrency";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { Ellipsis } from "lucide-react";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<ICart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
      setLoading(false);
    }
  };

  const incrementQuantity = (cartItemId: number) => {
    if (!cart) return;
    const updatedCartItems = cart.cart_items.map((item) =>
      item.cart_id === cartItemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart({ ...cart, cart_items: updatedCartItems });
  };

  const decrementQuantity = (cartItemId: number) => {
    if (!cart) return;
    const updatedCartItems = cart.cart_items.map((item) =>
      item.cart_id === cartItemId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCart({ ...cart, cart_items: updatedCartItems });
  };

  const handleDelete = async () => {
    if (!deleteItemId || !cart) return;

    try {
      await deleteCartItem(deleteItemId);
      await fetchCart();
      setDeleteItemId(null);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const calculateTotalItems = () => {
    if (!cart?.cart_items) return 0;
    return cart.cart_items.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateGrandTotal = () => {
    if (!cart?.cart_items) return 0;
    return cart.cart_items.reduce(
      (total, item) => total + item.quantity * item.sub_total,
      0
    );
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="container lg:px-24 lg:py-12 py-6">
          <h5 className="text-xl font-semibold text-neutral-700">My Cart</h5>
          <p className="text-neutral-500">Please wait...</p>
        </div>
      </AppLayout>
    );
  }

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
              {!cart || !cart.cart_items || cart.cart_items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    Keranjang belanja kosong
                  </td>
                </tr>
              ) : (
                cart.cart_items.map((item) => (
                  <tr
                    key={item.cart_id}
                    className="bg-transparent border-b border-neutral-300 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th scope="row" className="px-6 py-4">
                      <img
                        src="https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/27/06df471e-53e3-4055-87ce-e7d2a56bd923.png"
                        alt="product-image"
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                    </th>
                    <td className="px-6 py-4">{item.product_name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(item.cart_id)}
                          className="text-neutral-500 hover:text-neutral-700 focus:outline-none text-3xl"
                        >
                          -
                        </button>
                        <span className="mx-2 text-neutral-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.cart_id)}
                          className="text-neutral-500 hover:text-neutral-700 focus:outline-none text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {formatToRupiah(item.quantity * item.sub_total)}
                    </td>
                    <td>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            onClick={() => setDeleteItemId(item.cart_id)}
                          >
                            <Ellipsis className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete your item from the cart.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-right">
          <div className="mb-3">
            <p className="text-lg text-neutral-600">
              Total Items: {calculateTotalItems()}
            </p>
            <p className="text-lg text-neutral-600">
              Grand total:{" "}
              <strong className="text-lime-600">
                {formatToRupiah(calculateGrandTotal())}
              </strong>
            </p>
          </div>
          <Button>Checkout</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Cart;
