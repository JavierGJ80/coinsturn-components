/// <reference types="react" />
import "./FileUploader.css";
declare type UploaderDesign = "SIMPLE" | "DETAILED";
declare type FileType = "IMAGE" | "FILE";
declare type FileUploaderProps = {
    endpoint: string;
    onUpload: (imgLink: string) => void;
    fileType: FileType;
    imageSource?: string;
    design?: UploaderDesign;
};
declare const FileUploader: (props: FileUploaderProps) => JSX.Element;
export default FileUploader;
