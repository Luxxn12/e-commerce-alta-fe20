import { Link } from "react-router-dom";
import { IProduct } from "../utils/apis/products/types";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface ProductCardProps {
  data: IProduct;
  navigation: string;
  "data-testid"?: string;
}

export const CardProduct = (props: ProductCardProps) => {
  const { data, navigation } = props;
  return (
    <Link to={navigation}>
      <Card className="w-full max-w-sm">
        <img
          src={data.product_picture}
          alt={data.product_name}
          width={250}
          height={250}
          className="rounded-t-lg object-cover w-full aspect-square"
        />
        <div className="px-1 py-4 space-y-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{data.product_name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {data.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="font-semibold text-xl">Rp.{data.price}</span>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export const ProductCardLoading = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-[250px] rounded-xl" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="flex items-center justify-between pt-4">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
};
