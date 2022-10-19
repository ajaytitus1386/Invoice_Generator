import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LandingHeader from "../components/Landing/LandingHeader";
import SavedInvoices from "../components/Landing/SavedInvoices";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Invoice Generator</title>
      </Head>
      <div className="absolute right-32 top-12">
        <Image
          src="/assets/invoice_image.png"
          width={420}
          height={460}
          alt="Cover"
        />
      </div>
      <LandingHeader />
      <div className="mb-12"></div>
      <SavedInvoices />
    </div>
  );
};

export default Home;
