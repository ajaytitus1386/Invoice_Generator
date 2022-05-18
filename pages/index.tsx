import type { NextPage } from "next";
import Image from "next/image";
import LandingHeader from "../components/Landing/LandingHeader";
import SavedInvoices from "../components/Landing/SavedInvoices";

const Home: NextPage = () => {
  return (
    <div>
      <div className="absolute right-32 top-12">
        <Image src="/assets/invoice_image.png" width={420} height={460} />
      </div>
      <LandingHeader />
      <div className="mb-12"></div>
      <SavedInvoices />
    </div>
  );
};

export default Home;
