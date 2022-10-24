import { Invoice } from "../../models/invoice";
import { getCookie, hasCookie } from "cookies-next";

export function getSavedInvoicesFromCookie({
  req,
  res,
}: {
  req?: any;
  res?: any;
}): Invoice[] {
  return hasCookie("savedInvoices")
    ? JSON.parse(getCookie("savedInvoices", { req, res }) as string)
    : [];
}
