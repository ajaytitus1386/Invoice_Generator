import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

function LandingHeader() {
  const [customerName, setCustomerName] = useState("");
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  function updateNameValue(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCustomerName(event.target.value);
  }

  function goToInvoiceGenerator() {
    if (customerName.trim() != "")
      router.push({
        pathname: `/invoices/edit`,
        query: { id: customerName },
      });
    else {
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 860);
    }
  }

  return (
    <div className="flex flex-col justify-start pb-12 space-y-12 shadow-lg px-safe">
      <h1 className="text-5xl font-extrabold text-blueMarguerite ">
        Invoice Generator
      </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          goToInvoiceGenerator();
        }}
        className="flex flex-col sm:flex-row items-center sm:w-3/5 h-auto sm:space-x-4 space-y-2 sm:space-y-0"
      >
        <div className="sm:w-1/2 border-class">
          <TextField
            id="name"
            placeholder="Enter Customer Name"
            value={customerName}
            onChange={(event) => {
              updateNameValue(event);
            }}
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <button
          type="submit"
          className={`button-solid ${hasError ? "button-error" : ""}`}
        >
          <strong className="text-xl font-medium tracking-wide text-white">
            Generate Invoice
          </strong>
        </button>
      </form>
    </div>
  );
}

export default LandingHeader;
