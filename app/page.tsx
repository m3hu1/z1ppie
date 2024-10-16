import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Eye, GithubIcon } from "lucide-react";
import { SiteFooter } from "./Footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { EyeCatchingButton_v1 } from "@/components/ui/shimmerButton";

const Home = () => {
  const words = [
    {
      text: "Share",
    },
    {
      text: "files",
    },
    {
      text: "blazingly",
    },
    {
      text: "fast",
    },
    {
      text: "using",
    },
    {
      text: "z1ppie.",
      className: "underline text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="mt-8 gap-3 flex justify-center z-10">
        <Link href="/share">
          <EyeCatchingButton_v1>Start sharing</EyeCatchingButton_v1>
        </Link>
        <Link
          href={"https://github.com/m3hu1/z1ppie"}
          className="flex items-center"
        >
          <EyeCatchingButton_v1>
            <GithubIcon size={18} className="mr-2" />
            GitHub Repo
          </EyeCatchingButton_v1>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Home;
