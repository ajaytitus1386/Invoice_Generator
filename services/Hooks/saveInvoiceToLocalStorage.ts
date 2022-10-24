import { Invoice } from "../../models/invoice";

export function saveInvoiceToLocalStorage(invoice: Invoice) {
  if (window != undefined) {
    let retrievedData = localStorage.getItem("savedInvoices") ?? "";
    if (retrievedData == "") {
      let savedInvoice = [invoice];
      localStorage.setItem("savedInvoices", JSON.stringify(savedInvoice));
      // console.log("Pushed single new Invoice");
      return;
    } else {
      let savedInvoices: Invoice[] = JSON.parse(retrievedData);
      // console.log("Current Invoices:", savedInvoices);
      savedInvoices.push(invoice);
      localStorage.setItem("savedInvoices", JSON.stringify(savedInvoices));
      // console.log("Pushed new invoice to saved");
    }
  }
}
