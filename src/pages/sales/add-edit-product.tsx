import { ReactNode } from "react";
import { IProduct } from "../../utils/apis/products/types";


interface Props {
  children: ReactNode;
  editData?: IProduct;
  onSubmit: (data: BookSchema) => void;
}

export default function AddEditProduct() {
  return (
    <div>
      AddEditProduct
    </div>
  );
}

