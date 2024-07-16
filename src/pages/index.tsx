import { Link } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import { Button } from "../components/ui/button";
import { CardProduct } from "../components/card-product";
import { sampleProductCard } from "../utils/apis/products/sample-data";

export default function Homepage() {
  return (
    <AppLayout>
      <div className="container">
        <section className="w-full py-12  lg:px-28 px-0 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          <div className="w-full h-full flex flex-col justify-center space-y-4 order-1 md:order-none">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none">
                Find you dream Gadget!
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Get access to the latest and greatest gadgets with exclusive
                offers and unbeatable prices. Discover the newest innovations
                and enjoy exceptional deals tailored just for you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>
                <Link to={'/login'} data-testid="#">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full h-full flex  flex-row xl:justify-end lg:justify-end justify-center ">
            <img
              src="/img-phone2.png"
              width={361}
              height={"auto"}
              alt="img-iphone2"
            />
          </div>
        </section>
      </div>
      <div className=" w-full  lg:px-24 px-0 md:px-0 bg-white py-10">
        <div className="container">
          <div className="flex flex-row justify-center text-center">
            <text className="text-2xl font-bold">Newest Release</text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center gap-4 py-10">
            {sampleProductCard.map((product) => {
              return (
                <CardProduct
                  key={product.id}
                  data={product}
                  navigation={''}
                  data-testid={`detail-other-procudt`}
                  //kondisional tidak required cLassName
                  className="border border-neutral-200 shadow"
                />
             )
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

