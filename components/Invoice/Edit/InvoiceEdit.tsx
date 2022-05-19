import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Invoice } from "../../../models/invoice";
import InvoiceHeader from "../InvoiceHeader";
import ProductTable from "./ProductTable";

interface InvoiceEditProps {
  transactionName: String;
  setTransactionName: Function;
  invoice: Invoice;
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
}

function InvoiceEdit({
  transactionName,
  setTransactionName,
  invoice,
  setInvoice,
}: InvoiceEditProps) {
  const [totalAmount, setTotalAmount] = useState(0.0);

  useEffect(() => {
    let sum = 0;
    invoice.products.forEach((product) => {
      sum += product.rate * product.quantity;
    });
    setTotalAmount(sum);
  }, [invoice]);

  const currentDate = Date.now();
  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(currentDate);
  return (
    <div className="shadow-lg">
      <InvoiceHeader />
      <div className="flex flex-row items-center justify-between py-5 px-safe">
        <div className="flex flex-col items-start justify-start w-3/5 space-y-4">
          <div className="w-full border-class">
            <TextField
              id="transaction_name"
              placeholder="Enter Transaction Name"
              value={transactionName}
              onChange={(event) => {
                setTransactionName(event.target.value);
              }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
          </div>
          <label className="ml-4">{"Paid on " + formattedDate}</label>
        </div>
        <div className="flex items-end justify-end w-2/5 ">
          <div className="flex flex-col items-start space-y-2">
            <strong className="text-xl text-black">Amount Paid</strong>
            <h1 className="text-3xl font-bold text-blueMarguerite">
              {"$" + totalAmount.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-10 pb-5">
        <ProductTable invoice={invoice} setInvoice={setInvoice} />
      </div>
      <div className="flex justify-end px-safe">
        <div className="flex flex-col w-2/5">
          <hr></hr>
          <div className="flex flex-row justify-between py-5">
            <strong className="font-medium">Total</strong>
            <strong className="font-medium">
              {"$" + totalAmount.toFixed(2)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceEdit;
