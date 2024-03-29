import React, { useEffect, useState, forwardRef } from "react";
import CSS from 'csstype';
import "./index.css";

export interface UploadPdfProps {
  resPartner : {[key:string] : any;}[];
  originalFiles : {[key:string] : any;}[];
  inputId : string;
  onChange : (params: any) => void
}

const UploadPdf = (props: UploadPdfProps) => {
    const { resPartner, inputId, onChange, originalFiles } = props
    const initialArray : string[] = []
    const language = resPartner[0].coinsturn_language
    const color = resPartner[0].coinsturn_theme
    try{
      if(originalFiles.length == 0){
        initialArray.push(language=="es"?"No hay archivos":"No file chosen")
      }
      else{
        originalFiles.map(file => {
          initialArray.push(file.file_name)
        })
      }
    }
    catch{
      initialArray.push(language=="es"?"No hay archivos":"No file chosen")
    }
    const [fileTitles, setFileTitles] = useState(initialArray)

    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newArr: string[]= []
      if(e.target.files!.length == 0){
        newArr = newArr.concat(initialArray)
      }
      else{
        if(!(["No hay archivos", "No file chosen"].includes(fileTitles[0]))){
          newArr = newArr.concat(initialArray)
        }
        Array.from(e.target.files!).map((file)=>{
          newArr.push(file.name)
        })
      }
      setFileTitles(newArr);
      onChange(e.target.files);
    }
    return(
      <div className="uploadPdfCont">
        <input id={inputId} type={"file"} name="file" accept="application/pdf" onChange={onChangeEvent} hidden multiple/>
        <label className="fileInput" htmlFor={inputId}>{language=="es"?"Subir Archivos":"Chose Files"}</label>
        {["No hay archivos", "No file chosen"].includes(fileTitles[0])?
          <span id="file-chosen" style={{color:(color=="light"?"#000000":"#FFFFFF")}}>{fileTitles[0]}</span>:
          <ul className="titleList" id="file-chosen-list" style={{color:(color=="light"?"#000000":"#FFFFFF")}}>
            {fileTitles.map(file => (
              <li key={file} className="elementList">{file}</li>
            ))}
          </ul>
        }
      </div>
    );
};

export default UploadPdf;

// [{"coinsturn_language":"es","coinsturn_theme":"light"}]
