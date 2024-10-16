import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GithubIcon } from "lucide-react";

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
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="mt-8 gap-3 flex justify-center">
        <Link href="/share">
          <Button size="lg">Start sharing</Button>
        </Link>
        
        <Button size="lg" variant={"outline"} className="flex items-center">
        <Link href={"https://github.com/m3hu1/z1ppie"} className="flex items-center">
                <GithubIcon size={18} className="mr-2" />
              
          GitHub Repo
        </Link>
        </Button>
        
        
      </div>
    </div>
  );
};

export default Home;
