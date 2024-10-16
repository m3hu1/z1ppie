import React from "react";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
import zdark from "@/assets/zdarkfinal.gif";
import zwhite from "@/assets/zwhite1.gif";

import Link from "next/link";
// import { LettersPullUp } from "@/components/ui/pullUp";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex font-extrabold text-[24px] px-3 py-1 m-2 rounded-lg w-full items-center justify-between">
        <div className="flex justify-center items-center flex-grow">
          <Image
            className="h-8 w-8 p-0 scale-0 hidden dark:flex dark:scale-100"
            src={zdark}
            alt="zippy"
          />
          <Image
            className="h-8 w-8 p-0 scale-100 flex dark:scale-0 dark:hidden"
            src={zwhite}
            alt="zippyinv"
          />
          <Link href="/" className="ml-2 z-10">
            z1ppie
            {/* <LettersPullUp text="z1ppie" /> */}
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
