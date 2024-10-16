"use client";
import React from "react";
import ShareCard from "./ShareCard";
import Chat from "./Chat";
import { ShootingStars } from "@/components/ui/shootingStars";
import { StarsBackground } from "@/components/ui/starsBg";

const Share = () => {  
  return (
    <>
      <div className="flex flex-wrap mt-[100px] gap-x-2 justify-center gap-y-3">
        <ShareCard />
        <Chat/>
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
};

export default Share;
