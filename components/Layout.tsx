import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";

function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div className="font-prompt">
      {!router.pathname.includes("preview") && <Navbar />}
      {children}
    </div>
  );
}

export default Layout;
