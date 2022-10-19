import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InvoiceEdit from "../../../components/Invoice/Edit/InvoiceEdit";

import ModeControlButton from "../../../components/Invoice/ModeControlButton";
import InvoicePreview from "../../../components/Invoice/Preview/InvoicePreview";
import { Invoice } from "../../../models/invoice";
import { Product } from "../../../models/product";
import { saveInvoiceToLocalStorage } from "../../../services/Hooks/saveInvoiceToLocalStorage";
import getProducts from "../../../services/product/getProducts";

function InvoiceGeneratorPage() {
  const [onPreviewMode, setOnPreviewMode] = useState(false);
  const [transactionName, setTransactionName] = useState("");

  const router = useRouter();

  const { id } = router.query;
  if (!id && typeof window !== "undefined") router.push("/");

  const initialInvoice: Invoice = {
    id: id as String,
    date: Date.now(),
    transaction_name: transactionName,
    products: [],
  };
  const [invoice, setInvoice] = useState(initialInvoice);

  const [productsMenuItems, setProductsMenuItems] = useState<Product[]>([]);
  async function fetchProductsFromApi() {
    const data = await getProducts();
    setProductsMenuItems(data);
  }
  useEffect(() => {
    fetchProductsFromApi();
  }, []);

  const dummy: Invoice = {
    id: "1",
    date: 1653023627929,
    transaction_name: "Queen",
    products: [
      {
        id: 1,
        description: "Trademark Filling App - USA",
        rate: 8500.0,
        quantity: 1,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Invoice Generator</title>
      </Head>
      <div className="flex flex-row items-center justify-between pt-4 px-safe bg-gray-50">
        <div className="flex flex-row items-center space-x-4">
          <strong className="heading-1">{id}</strong>
          <i className="material-icons-outlined">edit</i>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <ModeControlButton
            icon={"visibility"}
            label={"Preview"}
            setMode={setOnPreviewMode}
            isActive={onPreviewMode}
          />

          <ModeControlButton
            icon={"edit"}
            label={"Edit"}
            setMode={setOnPreviewMode}
            isActive={!onPreviewMode}
          />
        </div>
        <div className="flex flex-row items-center mb-2 space-x-4">
          <button
            onClick={() => {
              setInvoice({
                ...invoice,
                id: id as String,
                transaction_name: transactionName,
              });
            }}
            className="button-normal"
          >
            {"Save Changes"}
          </button>
          <button
            onClick={() => {
              saveInvoiceToLocalStorage(invoice);
            }}
            className="button-normal"
          >
            {"Save Invoice"}
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200"></div>
      <div className="flex flex-col items-center">
        <div className="w-1/2 py-8 ">
          {!onPreviewMode && (
            <InvoiceEdit
              transactionName={transactionName}
              setTransactionName={setTransactionName}
              invoice={invoice}
              setInvoice={setInvoice}
              productsMenuItems={productsMenuItems}
              setProductsMenuItems={setProductsMenuItems}
            />
          )}
          {onPreviewMode && <InvoicePreview invoice={invoice} />}
        </div>
      </div>
    </>
  );
}

export default InvoiceGeneratorPage;
