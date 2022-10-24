import { NextApiHandler } from "next";

import puppeteer from "puppeteer";

import { getCookie } from "cookies-next";

const Handler: NextApiHandler = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const { id } = req.query;

  const proto =
    req.headers["x-forwarded-proto"] || req.socket.connecting
      ? "https"
      : "http";

  await page.setCookie({
    name: "savedInvoices",
    value: getCookie("savedInvoices", { req, res }) as string,
    url: `${proto}://${req.headers.host}`,
  });

  await page.goto(`${proto}://${req.headers.host}/invoices/preview?id=${id}`, {
    waitUntil: "networkidle0",
  });
  // await page.waitForSelector("html");
  // await page.waitForNetworkIdle();

  await page.emulateMediaType("screen");

  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

  res.send(pdfBuffer);

  await browser.close();
};

export default Handler;
