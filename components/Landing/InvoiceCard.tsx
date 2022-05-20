import React from "react";

function InvoiceCard() {
  return (
    <div className="w-1/2 border-class">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col px-4 py-2">
          <strong className="text-lg heading-1">Invoice 1</strong>
          <label>5th May 2021</label>
        </div>
        <div>
          <button className="flex flex-row items-center px-4 py-2 text-blueMarguerite rounded-3xl hover:bg-lavender">
            View Invoice
            <i className="material-icons">keyboard_arrow_down</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCard;
