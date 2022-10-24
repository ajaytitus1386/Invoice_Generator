import { GetServerSideProps, NextPage } from "next";
import React from "react";
import InvoicePreview from "../../../components/Invoice/Preview/InvoicePreview";
import { Invoice } from "../../../models/invoice";

import { getSavedInvoicesFromCookie } from "../../../services/Hooks/getSavedInvoicesFromCookie";

type QueryParams = {
  id: string;
};

interface Props {
  invoice: Invoice;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  req,
  res,
}) => {
  const { id } = query as QueryParams;

  try {
    if (!id) throw new Error("No invoice id passed!");

    const invoices = getSavedInvoicesFromCookie({ req, res });

    const foundInvoice = invoices.find(
      (invoice) => invoice.id === id.split("%20").join(" ")
    );

    if (!foundInvoice)
      throw new Error("Could not find an invoice saved with that ID");

    return {
      props: {
        invoice: foundInvoice,
      },
    };
  } catch (error) {
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
