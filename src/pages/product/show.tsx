import { Button } from "../../components/ui/button";
import AppLayout from "../../layouts/app-layout";

const Show = () => {
  return (
    <AppLayout>
      <section className="container mx-auto lg:py-12 py-6">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <img
              src="https://akcdn.detik.net.id/visual/2023/10/26/samsung-s23-fe-cnbc-indonesiafaisal-rahman-6_169.jpeg?w=715&q=90"
              alt="Samsung Galaxy S23 FE"
              className="rounded-md"
              loading="lazy"
            />
          </div>
          <div className="flex-1 max-w-md md:max-w-xl p-4">
            <h1 className="font-semibold text-xl text-neutral-700">
              Samsung Galaxy S23 FE 128/6 Mint Garansi Resmi SEIN
            </h1>
            <span className="text-sm text-neutral-400">
              Seller: Username | Category: Smartphone | Stock: 4
            </span>
            <div>
              <p className="text-lg text-lime-600 mb-3">Rp. 12.399.000</p>
              <Button>Add to Cart</Button>
            </div>

            <div className="my-4">
              <h5 className="text-lg text-neutral-600">Description</h5>
              <p className="text-justify text-neutral-500">
                The iPhone 15 in Pink embodies sophistication with its soft pink
                color palette. It boasts a stunning Super Retina XDR display
                spanning 6.1 inches, delivering vibrant visuals and sharp
                detail. Equipped with a powerful dual 48MP camera system, it
                ensures exceptional photo and video quality, enhanced by
                advanced imaging technologies. <br /> <br />
                Under the hood, the iPhone 15 runs on the cutting-edge A16
                Bionic chip, offering blazing-fast performance and improved
                energy efficiency. It promises extended battery life, keeping
                you connected and productive throughout the day. Security is
                seamless with Face ID, providing quick and secure access to your
                device. With 5G support, the iPhone 15 enables lightning-fast
                connectivity for streaming, gaming, and browsing. <br /> <br />
                It operates on iOS 17, Apple's latest operating system, packed
                with new features and enhancements to elevate your user
                experience. In essence, the iPhone 15 Pink combines innovative
                technology with a stylish design, making it not just a device,
                but a statement of modern luxury and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Show;