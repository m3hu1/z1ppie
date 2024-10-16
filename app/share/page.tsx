import Share from "../Share";
import { SP } from "../SP";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Dots_v3 } from "@/components/ui/dotsv3";

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Dots_v3 ></Dots_v3>/
        </div>
      }
    >
      <SP>
          <Share />
          <Toaster />
      </SP>
    </Suspense>
  );
};

export default page;
