import React from "react";
import { Invoice } from "../../../models/invoice";
import { Product } from "../../../models/product";
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
    id: 0,
    description: "",
    quantity: 0,
    rate: 0,
  };

  const addEmptyProduct = () => {
    if (
      invoice.products.length != 0 &&
      invoice.products[invoice.products.length - 1].description == ""
    )
      return;
    setInvoice((invoice) => ({
      ...invoice,
      products: [...invoice.products, latestProduct],
    }));
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
          <tr>
            <button className="" onClick={() => addEmptyProduct()}>
              <i className="material-icons-outlined mr-1 text-blueMarguerite">
                {"add"}
              </i>
            </button>
          </tr>

          {invoice.products &&
            invoice.products.map((product, index) => {
              return (
                <ProductTableRow
                  key={product.id}
                  index={index}
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
