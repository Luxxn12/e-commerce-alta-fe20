import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>

      <main className="flex-grow bg-lightGray">{children}</main>

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
