import { Layers, TagIcon, User } from "lucide-react";
import AppLayout from "../../layouts/app-layout";


export default function DetailProduct() {
  return (
    <AppLayout>
      <div className=" flex w-full py-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-6 mx-auto py-6">
          <div className="grid gap-4 md:gap-8">
            <img
              src="/img-phone2.png"
              alt="Product Image"
              width={500}
              height={800}
            />
          </div>
          <div className="grid gap-4 md:gap-8">
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">Iphone 15 128GB Rose Gold</h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="text-4xl font-bold">Rp. 14.999.000</div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <TagIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Category: Clothing</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Stock: 30</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">User: Jhon</span>
              </div>
            </div>
            <div className="text-sm leading-loose text-muted-foreground">
              <p className="font-bold text-xl lg:text-xl text-black">Description</p>
              <p>
                Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This tee
                is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey, ensuring a
                soft and breathable fabric that feels gentle against the skin.
              </p>
              <p>
                The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique
                prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

