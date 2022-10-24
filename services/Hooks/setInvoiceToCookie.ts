import { Invoice } from "../../models/invoice";
import { hasCookie, getCookie, setCookie } from "cookies-next";

export function setInvoiceToCookie(invoice: Invoice) {
  let retrievedData: Invoice[] = hasCookie("savedInvoices")
    ? JSON.parse(getCookie("savedInvoices") as string)
    : [];

  const newInvoices: Invoice[] = [...retrievedData, invoice];

  setCookie("savedInvoices", newInvoices);
}
