import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getCart, addToCart as apiAddToCart } from "../cart/api";
import { ICart } from "../cart/type";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
  notifications: {
    id: number;
    message: string;
    type: "success" | "error" | "info";
  }[];
  addNotification: (
    message: string,
    type: "success" | "error" | "info"
  ) => void;
  clearNotifications: () => void;
  cart: ICart | null;
  addToCart: (product_id: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  const [notifications, setNotifications] = useState<
    { id: number; message: string; type: "success" | "error" | "info" }[]
  >([]);

  const [cart, setCart] = useState<ICart | null>(null);

  const addNotification = (
    message: string,
    type: "success" | "error" | "info"
  ) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications([...notifications, newNotification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const saveToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setToken(newToken);
  };

  const logout = () => {
    saveToken(null);
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const { data } = await getCart();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const addToCart = async (product_id: any) => {
    try {
      //tambah cart_items
      await apiAddToCart(product_id);

      // Setelah berhasil menambahkan, ambil data keranjang terbaru
      const { data } = await getCart();
      setCart(data);

      addNotification("Added to cart successfully", "success");
    } catch (error) {
      addNotification("Failed to add to cart", "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: saveToken,
        logout,
        notifications,
        addNotification,
        clearNotifications,
        cart,
        addToCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
