import { GetServerSideProps, NextPage } from "next";
import React from "react";
import InvoicePreview from "../../../components/Invoice/Preview/InvoicePreview";
import { Invoice } from "../../../models/invoice";

import { getSavedInvoicesFromCookie } from "../../../services/Hooks/getSavedInvoicesFromCookie";

type QueryParams = {
  id: string;
  invoiceJson: string;
};

interface Props {
  invoice: Invoice;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { id, invoiceJson } = query as QueryParams;

  try {
    if (!id) throw new Error("No invoice id passed!");

    return {
      props: {
        invoice: JSON.parse(invoiceJson),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const PreviewPDF: NextPage<Props> = ({ invoice }) => {
  return (
    <>
      <div className="print-active">
        <InvoicePreview invoice={invoice} />
      </div>
    </>
  );
};

export default PreviewPDF;
