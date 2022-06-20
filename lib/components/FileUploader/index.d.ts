/// <reference types="react" />
import "./FileUploader.css";
import { FileType } from "../../scripts/scripts";
declare type UploaderDesign = "SIMPLE" | "DETAILED" | "IMAGELESS";
declare type FileUploaderProps = {
    endpoint: string;
    onUpload: (imgLink: string) => void;
    fileType: FileType;
    imageSource?: string;
    design?: UploaderDesign;
    description?: string;
    uploadText?: string;
};
declare const FileUploader: (props: FileUploaderProps) => JSX.Element;
export default FileUploader;
