import { NextApiHandler } from "next";

import chromium from "chrome-aws-lambda";
import playwright from "playwright-core";

import { getCookie } from "cookies-next";
import { Invoice } from "../../models/invoice";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const proto =
    req.headers["x-forwarded-proto"] || req.socket.connecting
      ? "https"
      : "http";

  try {
    const browser = await playwright.chromium.launch({
      args: [...chromium.args, "--font-render-hinting=none"],
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    const invoices: Invoice[] = JSON.parse(
      getCookie("savedInvoices", { req, res }) as string
    );
    const invoice = invoices.find(
      (invoice) => invoice.id === id.toString().split("%20").join(" ")
    );

    if (!invoice)
      throw new Error("No invoice found in cookies that matches given ID ");

    await page.goto(
      `${proto}://${
        req.headers.host
      }/invoices/preview?id=${id}&invoiceJson=${JSON.stringify(invoice)}`,
      {
        waitUntil: "networkidle",
      }
    );

    console.log("pdf: " + JSON.stringify(await context.cookies()));

    await page.emulateMedia({ media: "screen" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    res.send(pdfBuffer);

    await context.close();
    await browser.close();
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default Handler;
