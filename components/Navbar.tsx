import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-start space-x-2 w-full px-safe py-4 h-18 md:h-24 bg-white">
      <Image src={"/assets/logo_purple.png"} width={29} height={29} />
      <h1 className="text-2xl font-extrabold text-blueMarguerite">
        Invoice Generator
      </h1>
    </div>
  );
}

export default Navbar;
