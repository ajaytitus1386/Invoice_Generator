import { TextField } from "@mui/material";
import React, { useState } from "react";

function LandingHeader() {
  const [customerName, setCustomerName] = useState("");

  function updateNameValue(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCustomerName(event.target.value);
  }

  function submitName() {
    console.log(customerName);
  }

  return (
    <div className="flex flex-col justify-start px-safe space-y-12 pb-12 shadow-lg">
      <h1 className="text-5xl font-extrabold text-blueMarguerite ">
        Invoice Generator
      </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitName();
        }}
        className="w-3/5 h-auto flex flex-row space-x-4 items-center"
      >
        <div className="border-class">
          <TextField
            id="name"
            placeholder="Enter Name"
            value={customerName}
            onChange={(event) => {
              updateNameValue(event);
            }}
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <button type="submit" className="button-solid">
          <strong className="text-white tracking-wide text-xl font-medium">
            Generate Invoice
          </strong>
        </button>
      </form>
    </div>
  );
}

export default LandingHeader;
