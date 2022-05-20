import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

function LandingHeader() {
  const [customerName, setCustomerName] = useState("");
  const router = useRouter();

  function updateNameValue(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCustomerName(event.target.value);
  }

  function submitName() {
    console.log(customerName);
  }

  function goToInvoiceGenerator() {
    if (customerName != "") router.push(`/invoices/${customerName}`);
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
        className="flex flex-row items-center w-3/5 h-auto space-x-4"
      >
        <div className="w-1/2 border-class">
          <TextField
            id="name"
            placeholder="Enter Name"
            required
            value={customerName}
            onChange={(event) => {
              updateNameValue(event);
            }}
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <button type="submit" className="button-solid">
          <strong className="text-xl font-medium tracking-wide text-white">
            Generate Invoice
          </strong>
        </button>
      </form>
    </div>
  );
}

export default LandingHeader;
