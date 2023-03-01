import React, { ChangeEvent, useEffect, useState } from "react";
import "./FileUploader.css";
import { FileType, uploadFile } from "../../scripts/scripts";

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

const defaultImage = "https://cdn-icons-png.flaticon.com/512/739/739249.png";
const defaultFile = "https://cdn-icons-png.flaticon.com/512/569/569800.png";
const uploadIcon =
  "https://cdn-icons.flaticon.com/png/512/2716/premium/2716054.png?token=exp=1655752480~hmac=11f964f9b3374fd947497854fbfaf62f";

const FileUploader = (props: FileUploaderProps) => {
  const {
    endpoint,
    fileType,
    onUpload,
    imageSource,
    design,
    description,
    uploadText,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (!file) return;
    uploadFile([file], endpoint, fileType)
      .then((res) => {
        console.log(res);
        if (!res || typeof res !== "string") return;
        onUpload(res);
      })
      .catch((err) => console.error(err));
  }, [file]);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event || !event.target || !event.target.files) return;
    setFile(event.target.files[0]);
  };

  if (design === "DETAILED") {
    return (
      <label className="uploader-detailed-main">
        <div className="uploader-detailed-container">
          <div className="uploader-detail-img-container">
            <img
              className="uploader-detail-img"
              src={
                fileType === "IMAGE"
                  ? imageSource
                    ? imageSource
                    : defaultImage
                  : defaultFile
              }
            />
          </div>
          <div className="uploader-detail-container">
            <div className="uploader-cloud-container">
              <img className="uploader-cloud" src={uploadIcon} />
              <div className="uploader-cloud-text">{uploadText}</div>
            </div>
            <div className="uploader-description">{description}</div>
          </div>
        </div>
        <input type="file" className="uploader-input" onChange={onChangeFile} />
      </label>
    );
  }

  if (design === "IMAGELESS") {
    return (
      <label className="uploader-imageless-main">
        <div className="uploader-imageless-container">
          <div className="uploader-detail-container">
            <div className="uploader-cloud-container">
              <img className="uploader-cloud" src={uploadIcon} />
              <div className="uploader-cloud-text">{uploadText}</div>
            </div>
            <div className="uploader-description">{description}</div>
          </div>
        </div>
        <input type="file" className="uploader-input" onChange={onChangeFile} />
      </label>
    );
  }

  return (
    <div className="uploader-simple-main">
      <div
        className="uploader-simple-img-container"
        onMouseEnter={() => setIsHovered(true)}
      >
        <img
          className={`uploader-simple-img ${
            isHovered ? "uploader-blurred" : ""
          }`}
          src={
            fileType === "IMAGE"
              ? imageSource
                ? imageSource
                : defaultImage
              : defaultFile
          }
        />
      </div>
      <label
        className={`uploader-simple-text ${isHovered ? "" : "hide"}`}
        onMouseLeave={() => setIsHovered(false)}
      >
        {fileType === "IMAGE" ? "Upload an Image" : "Upload a File"}
        <input type="file" className="uploader-input" onChange={onChangeFile} />
      </label>
    </div>
  );
};

export default FileUploader;
