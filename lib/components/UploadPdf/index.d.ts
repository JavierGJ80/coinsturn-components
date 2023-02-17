/// <reference types="react" />
import "./index.css";
export interface UploadPdfProps {
    resPartner: [{
        [key: string]: any;
    }];
    inputId: string;
    onChange: (params: any) => void;
}
declare const UploadPdf: (props: UploadPdfProps) => JSX.Element;
export default UploadPdf;
