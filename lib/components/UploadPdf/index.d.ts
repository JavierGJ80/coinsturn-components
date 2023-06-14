import React from "react";
import "./index.css";
export interface UploadPdfProps {
    resPartner: {
        [key: string]: any;
    }[];
    originalFiles: {
        [key: string]: any;
    }[];
    inputId: string;
    onChange: (params: any) => void;
}
declare const UploadPdf: (props: UploadPdfProps) => React.JSX.Element;
export default UploadPdf;
