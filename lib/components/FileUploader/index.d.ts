import React from "react";
import "./FileUploader.css";
import { FileType } from "../../scripts/scripts";
type UploaderDesign = "SIMPLE" | "DETAILED" | "IMAGELESS";
type FileUploaderProps = {
    endpoint: string;
    onUpload: (imgLink: string) => void;
    fileType: FileType;
    imageSource?: string;
    design?: UploaderDesign;
    description?: string;
    uploadText?: string;
};
declare const FileUploader: (props: FileUploaderProps) => React.JSX.Element;
export default FileUploader;
