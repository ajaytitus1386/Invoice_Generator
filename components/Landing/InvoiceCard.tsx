import React, { useState } from "react";
import { Invoice } from "../../models/invoice";
import InvoicePreview from "../Invoice/Preview/InvoicePreview";

function InvoiceCard({ invoice }: { invoice: Invoice }) {
  const [showPreview, setShowPreview] = useState(false);

  function togglePreview() {
    setShowPreview(!showPreview);
  }

  const formattedDate = Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(invoice.date);
  return (
    <div className="w-1/2 border-class">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col px-4 py-2">
          <strong className="text-lg heading-1">
            {invoice.transaction_name == ""
              ? "Unnamed Transaction"
              : invoice.transaction_name}
          </strong>
          <label>{formattedDate}</label>
        </div>
        <a
          href={`/api/pdf?id=${invoice.id}`}
          download={`${invoice.id}_${invoice.transaction_name}.pdf`}
        >
          <i className="material-icons">{"download"}</i>
        </a>
        <div>
          <button
            onClick={togglePreview}
            className="flex flex-row items-center px-4 py-2 text-blueMarguerite rounded-3xl hover:bg-lavender"
          >
            View Invoice
            <i className="material-icons">
              {showPreview ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </i>
          </button>
        </div>
      </div>
      {showPreview && (
        <div className="px-2 py-4">
          <InvoicePreview invoice={invoice} />
        </div>
      )}
    </div>
  );
}

export default InvoiceCard;
