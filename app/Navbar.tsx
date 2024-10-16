import React from "react";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import zippy from "@/assets/zippy.png";
import zippyinv from "@/assets/zippyinv.png";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex font-extrabold text-[24px] px-3 py-1 m-2 rounded-lg w-full items-center justify-between">
        <div className="flex justify-center items-center flex-grow">
          <Image
            className="h-8 w-8 p-0 scale-0 hidden dark:flex dark:scale-100"
            src={zippyinv}
            alt="zippy"
          />
          <Image
            className="h-8 w-8 p-0 scale-100 flex dark:scale-0 dark:hidden"
            src={zippy}
            alt="zippyinv"
          />
          <Link href="/" className="ml-2 z-10">
            z1ppie
          </Link>
        </div>
        <div className="flex gap-x-2 z-10">
          <div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
