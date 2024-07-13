import { ReactNode } from "react";
import Navbar from "../components/navbar";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-10">
        <Navbar />
      </header>

      <main className="flex-grow p-4 bg-lightGray">{children}</main>

      <footer className="bg-lightGray py-4 z-10">
        <p className="text-neutral-600 container">
          {new Date().getFullYear()} Toko Gadjet. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AppLayout;
