import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const [isLandingPage, setIsLandingPage] = useState(pathname == "/");
  useEffect(() => {
    setIsLandingPage(pathname == "/");
  }, [router]);

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-start w-full py-4 space-x-2 bg-white px-safe h-18 md:h-24">
      <Image src={"/assets/logo_purple.png"} width={29} height={29} />
      {!isLandingPage && (
        <h1 className="text-2xl font-extrabold text-blueMarguerite">
          Invoice Generator
        </h1>
      )}
    </div>
  );
}

export default Navbar;
