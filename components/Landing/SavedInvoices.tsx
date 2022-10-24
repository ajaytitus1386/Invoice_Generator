import React, { useEffect, useState } from "react";
import { Invoice } from "../../models/invoice";
import { getSavedInvoicesFromCookie } from "../../services/Hooks/getSavedInvoicesFromCookie";
import InvoiceCard from "./InvoiceCard";

function SavedInvoices() {
  const [savedInvoices, setSavedInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
    const fetchedInvoices = getSavedInvoicesFromCookie({});

    setSavedInvoices(fetchedInvoices);
  }, []);

  return (
    <div className="flex flex-col h-screen py-8 space-y-4 px-safe ">
      <h1 className="heading-1">Saved Invoices</h1>
      {savedInvoices.length != 0 ? (
        savedInvoices.map((invoice) => (
          <InvoiceCard key={invoice.id.toString()} invoice={invoice} />
        ))
      ) : (
        <h1 className="text-black">
          Looks like you have no invoices saved yet!
        </h1>
      )}
    </div>
  );
}

export default SavedInvoices;
