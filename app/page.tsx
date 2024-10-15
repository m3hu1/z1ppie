import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="mt-8 gap-3 flex justify-center">
        <Link href="/share">
          <Button size="lg">Get Started</Button>
        </Link>
        <Button size="lg" variant={"outline"}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Home;
