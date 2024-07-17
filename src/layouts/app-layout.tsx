import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { useAuth } from "../utils/apis/contexts/token";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  const location = useLocation();
  const { notifications, clearNotifications } = useAuth();

  useEffect(() => {
    if (notifications.length > 0) {
      notifications.forEach((notification) => {
        toast(notification.message, { type: notification.type });
      });
      clearNotifications();
    }
  }, [notifications, clearNotifications]);

  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>

      <main className="flex-grow bg-lightGray">
        <ToastContainer position="bottom-right" />
        {children}
      </main>

      <footer
        className={`py-4 z-10 ${
          location.pathname === "/" ? "bg-white" : "bg-lightGray"
        }`}
      >
        <p className="text-neutral-600 container">
          {new Date().getFullYear()} Toko Gadjet. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AppLayout;
