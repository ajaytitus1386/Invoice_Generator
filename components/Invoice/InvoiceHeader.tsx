import Image from "next/image";
import React from "react";

function InvoiceHeader() {
  return (
    <div>
      <div className="w-full h-2 bg-blueMarguerite"></div>

      <div className="flex flex-row items-start justify-between py-12 bg-lavender px-safe">
        <div className="flex flex-row items-center space-x-4 ">
          <Image
            src={"/assets/logo_purple.png"}
            width={29}
            height={29}
            alt="Logo"
          />
          <h1 className="text-2xl font-bold text-blueMarguerite">
            Invoice Generator
          </h1>
        </div>
        <div className="flex flex-col items-end font-bold">
          <label>{"Your Awesome Company"}</label>
          <label>{"+1 420-236-1386"}</label>
          <label>{"1001 Workplace Offices, Suite 1"}</label>
          <label>{"Mountain View, California"}</label>
          <label>{"94040 - 2479"}</label>
          <label>{"United States"}</label>
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;
