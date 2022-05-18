import React from "react";
import InvoiceCard from "./InvoiceCard";

function SavedInvoices() {
  return (
    <div className="flex flex-col px-safe py-8 space-y-4 h-screen ">
      <h1 className="heading-1">Saved Invoices</h1>
      <InvoiceCard />
    </div>
  );
}

export default SavedInvoices;
