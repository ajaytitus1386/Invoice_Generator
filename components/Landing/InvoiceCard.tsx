import React from "react";

function InvoiceCard() {
  return (
    <div className="border-class">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col px-4 py-2">
          <strong className="heading-1 text-lg">Invoice 1</strong>
          <label>5th May 2021</label>
        </div>
        <div>
          <button className="text-blueMarguerite flex flex-row items-center rounded-3xl px-4 py-2 hover:bg-lavender">
            View Invoice
            <i className="material-icons">keyboard_arrow_down</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCard;
