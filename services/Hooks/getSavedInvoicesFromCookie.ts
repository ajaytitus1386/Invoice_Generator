import { Invoice } from "../../models/invoice";
import { getCookie } from "cookies-next";

export function getSavedInvoicesFromCookie({
  req,
  res,
}: {
  req?: any;
  res?: any;
}): Invoice[] {
  return JSON.parse(getCookie("savedInvoices", { req, res }) as string);
}
