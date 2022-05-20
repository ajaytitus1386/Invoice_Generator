import React from "react";
import { Product } from "../../../models/product";

interface PreviewProductTableRowProps {
  product: Product;
}

function PreviewProductTableRow({ product }: PreviewProductTableRowProps) {
  return (
    <tr className="font-medium">
      <td className="text-left">{product.description}</td>
      <td className="text-center">{"$" + product.rate}</td>
      <td className="text-center">{product.quantity}</td>
      <td className="text-center">{"$" + product.rate * product.quantity}</td>
    </tr>
  );
}

export default PreviewProductTableRow;
