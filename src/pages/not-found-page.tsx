import AppLayout from "../layouts/app-layout";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <section className="mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl text-neutral-700 tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-neutral-700 md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-neutral-500">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Button onClick={() => navigate("/")}>Back to Homepage</Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default NotFoundPage;
