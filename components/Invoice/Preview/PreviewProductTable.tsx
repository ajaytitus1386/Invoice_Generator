import React from "react";
import { Invoice } from "../../../models/invoice";
import PreviewProductTableRow from "./PreviewProductTableRow";

interface PreviewProductTableProps {
  invoice: Invoice;
}

function PreviewProductTable({ invoice }: PreviewProductTableProps) {
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
          {invoice.products &&
            invoice.products.map((product, index) => {
              return <PreviewProductTableRow key={index} product={product} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default PreviewProductTable;
