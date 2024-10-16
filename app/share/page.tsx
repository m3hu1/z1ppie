import Share from "../Share";
import { SP } from "../SP";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <SP>
      <Share />
      <Toaster />
    </SP>
  );
};

export default page;
