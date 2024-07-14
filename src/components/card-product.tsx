import { Link } from "react-router-dom";
import { IProduct } from "../utils/apis/products/types";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ProductCardProps {
  data: IProduct;
  navigation: string;
  "data-testid"?: string;
}

export const CardProduct = (props: ProductCardProps) => {
  const { data, navigation } = props;
  return (
    <Link to={navigation} >
      <Card className="w-full max-w-sm">
        <img
          src={data.image}
          alt={data.name}
          width={250}
          height={250}
          className="rounded-t-lg object-cover w-full aspect-square"
        />
        <CardContent className="p-4 space-y-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{data.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
             {data.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="font-semibold text-xl">Rp.{data.price}</span>
            <Button>Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
