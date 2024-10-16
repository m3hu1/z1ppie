import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File } from "lucide-react";

type fileUploadBtn = {
  inputRef: any;
  handleFileChange: any;
  uploadBtn: any;
};
const FileUploadBtn = ({
  inputRef,
  handleFileChange,
  uploadBtn,
}: fileUploadBtn) => {
  return (
    <>
      <Input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={(e) => handleFileChange(e)}
      />
      <Button
        type="button"
        onClick={uploadBtn}
        className=" flex gap-x-2"
      >
        <File size={15} />
        Select File
      </Button>
    </>
  );
};

export default FileUploadBtn;
