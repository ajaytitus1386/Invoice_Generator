import { Invoice } from "../../models/invoice";

export function fetchSavedInvoices(): Invoice[] {
  if (window != undefined) {
    let retrievedData = localStorage.getItem("savedInvoices") ?? "";
    if (retrievedData == "") {
      return [];
    } else {
      const savedInvoices: Invoice[] = JSON.parse(retrievedData);
      return savedInvoices;
    }
  }
  return [];
}
