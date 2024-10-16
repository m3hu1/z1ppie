import Share from "../Share";
import { SP } from "../SP";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SP>
        <Share />
        <Toaster />
      </SP>
    </Suspense>
  );
};

export default page;
