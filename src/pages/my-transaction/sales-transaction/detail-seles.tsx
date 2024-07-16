import { Badge } from "../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import AppLayout from "../../../layouts/app-layout";

export default function DetailSeles() {
  return (
    <AppLayout>
      <div className="container lg:px-24 lg:py-12 py-6">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Seles #SlS23456
              </CardTitle>
              <CardDescription>Date: Juli 15, 2024</CardDescription>
              <CardDescription>
                Jalan Gunung Anthena 1 No 11A, Padang sambian klod, Denpasar
                barat, Denpasar Bali
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                SUCCESS
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <div className="font-semibold">Item Purchased</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/img-phone2.png"
                      alt="Product Image"
                      width={64}
                      height={64}
                      className="aspect-square rounded-md object-cover"
                    />
                    <div>
                      <div className="font-medium">
                        Acme Wireless Headphones
                      </div>
                      <div className="text-muted-foreground">
                        Category: AH-1234
                      </div>
                    </div>
                  </div>
                  <div className="font-medium">Qty: 1</div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-3">
                <div className="font-semibold">Seles Details</div>
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>Rp. 12.456.000</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Rp. 20.000</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>Rp.50.000</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>Rp. 12.526.000</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
