import React, { useEffect, useState } from "react";
import { Invoice } from "../../models/invoice";
import { fetchSavedInvoices } from "../../services/Hooks/fetchSavedInvoices";
import InvoiceCard from "./InvoiceCard";

function SavedInvoices() {
  const [savedInvoices, setSavedInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
    const fetchedInvoices = fetchSavedInvoices();
    console.log(fetchedInvoices);
    setSavedInvoices(fetchedInvoices);
  }, []);

  return (
    <div className="flex flex-col h-screen py-8 space-y-4 px-safe ">
      <h1 className="heading-1">Saved Invoices</h1>
      {savedInvoices &&
        savedInvoices.map((invoice, index) => (
          <InvoiceCard key={index} invoice={invoice} />
        ))}
    </div>
  );
}

export default SavedInvoices;
