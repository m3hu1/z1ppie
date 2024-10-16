import Share from "../Share";
import { SP } from "../SP";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Dots_v2 } from "@/components/ui/dots2";
import { SparklesCore } from "@/components/ui/sparkles";

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Dots_v2></Dots_v2>
        </div>
      }
    >
      <SP>
        <div className="relative flex flex-col items-center justify-center overflow-hidden h-[45rem]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 z-0"
            particleColor={"#FFFFFF"}
          />
          <Share />
          <Toaster />
        </div>
      </SP>
    </Suspense>
  );
};

export default page;
