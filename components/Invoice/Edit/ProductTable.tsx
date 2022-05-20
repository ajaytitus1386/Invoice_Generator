import React, { useEffect, useState } from "react";
import { Invoice } from "../../../models/invoice";
import { Product } from "../../../models/product";
import getProducts from "../../../services/product/getProducts";
import ProductTableRow from "./ProductTableRow";

interface ProductTableProps {
  invoice: Invoice;
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
  productsMenuItems: Product[];
  setProductsMenuItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

function ProductTable({
  invoice,
  setInvoice,
  productsMenuItems,
  setProductsMenuItems,
}: ProductTableProps) {
  const latestProduct: Product = {
    id: invoice.products.length,
    description: "",
    quantity: 0,
    rate: 0,
  };
  return (
    <div className="p-4 border-2 border-solid border-midPurple rounded-xl">
      <table className="w-full table-fixed">
        <thead className="w-full text-blueMarguerite">
          <tr className="">
            <th className="w-3/5 px-1 text-left">Description</th>
            <th className="px-1 text-center">Rate</th>
            <th className="px-1 text-center">Qty</th>
            <th className="px-1 text-center">Line Total</th>
          </tr>
        </thead>

        <tbody className="">
          <ProductTableRow
            initialProduct={latestProduct}
            productsMenuItems={productsMenuItems}
            setProductsMenuItems={setProductsMenuItems}
            index={invoice.products.length}
            invoice={invoice}
            setInvoice={setInvoice}
          />
          {invoice.products &&
            invoice.products.map((product, index) => {
              return (
                <ProductTableRow
                  key={index}
                  index={invoice.products.length}
                  productsMenuItems={productsMenuItems}
                  setProductsMenuItems={setProductsMenuItems}
                  initialProduct={product}
                  invoice={invoice}
                  setInvoice={setInvoice}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
