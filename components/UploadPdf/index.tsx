import React, { useEffect, useState, forwardRef } from "react";
import CSS from 'csstype';
import "./index.css";

export interface UploadPdfProps {
  resPartner : [{[key:string] : any;}];
  onChange : (params: any) => void
}

const UploadPdf = (props: UploadPdfProps) => {
    const { resPartner, onChange } = props
    const language = resPartner[0].coinsturn_language
    const color = resPartner[0].coinsturn_theme
    const [fileTitle, setFileTitle] = useState(language=="es"?"No hay archivos":"No file chosen")

    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files!.length > 1){
        setFileTitle(language=="es"?`(${e.target.files?.length}) archivos subidos`:`(${e.target.files?.length}) files uploaded`);
      }
      else{
        setFileTitle(e.target.files![0].name);
      }
      onChange(e.target.files);
    }
    return(
      <div className="uploadPdfCont">
        <input id="In" type={"file"} name="file" accept="application/pdf" onChange={onChangeEvent} hidden multiple/>
        <label className="fileInput" htmlFor="In">{language=="es"?"Subir Archivos":"Chose Files"}</label>
        <span id="file-chosen" style={{color:(color=="light"?"#000000":"#FFFFFF")}}>{fileTitle}</span>
      </div>
    );
};

export default UploadPdf;

// [{"coinsturn_language":"es","coinsturn_theme":"light"}]
