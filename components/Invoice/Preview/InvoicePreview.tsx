import React, { useEffect, useState } from "react";
import { Invoice } from "../../../models/invoice";
import InvoiceHeader from "../InvoiceHeader";
import PreviewProductTable from "./PreviewProductTable";

interface InvoicePreviewProps {
  invoice: Invoice;
}

function InvoicePreview({ invoice }: InvoicePreviewProps) {
  const [totalAmount, setTotalAmount] = useState(0.0);
  useEffect(() => {
    let sum = 0;
    invoice.products.forEach((product) => {
      sum += product.rate * product.quantity;
    });
    setTotalAmount(sum);
  }, [invoice]);

  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(invoice.date);
  return (
    <div className="shadow-lg">
      <InvoiceHeader />
      <div className="flex flex-row items-center justify-between py-5 px-safe">
        <div className="flex flex-col items-start justify-start w-3/5 space-y-0">
          <div className="w-full">
            <strong className="text-2xl font-bold text-black">
              {invoice.transaction_name == ""
                ? "New Transaction"
                : invoice.transaction_name}
            </strong>
          </div>
          <label className="">{"Paid on " + formattedDate}</label>
        </div>
        <div className="flex items-end justify-end w-2/5 ">
          <div className="flex flex-col items-start space-y-2">
            <strong className="text-xl text-black">Amount Paid</strong>
            <h1 className="text-3xl font-bold text-blueMarguerite">
              {"$" +
                totalAmount.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
            </h1>
          </div>
        </div>
      </div>
      <div className="px-10 pb-5">
        <PreviewProductTable invoice={invoice} />
      </div>
      <div className="flex justify-end px-safe">
        {totalAmount != 0 && (
          <div className="flex flex-col w-2/5">
            <hr></hr>
            <div className="flex flex-row justify-between py-5">
              <strong className="font-medium">Total</strong>
              <strong className="font-medium">
                {"$" +
                  totalAmount.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoicePreview;
