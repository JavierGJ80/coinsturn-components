import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import "./FileUploader.css";

type UploaderDesign = "SIMPLE" | "DETAILED";
type FileType = "IMAGE" | "FILE";
type FileUploaderProps = {
  endpoint: string;
  updateValue: (imgLink: string) => void;
  fileType: FileType;
  imageSource?: string;
  design?: UploaderDesign;
};

const defaultImage = "https://cdn-icons-png.flaticon.com/512/739/739249.png";
const defaultFile = "https://cdn-icons-png.flaticon.com/512/569/569800.png";
const imageTypes = ["image/png", "image/jpg", "image/jpeg"];

const FileUploader = (props: FileUploaderProps) => {
  const { endpoint, fileType, updateValue, imageSource, design } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (!file) return;
    if (fileType === "IMAGE" && !imageTypes.includes(file.type)) return;
    const formData = new FormData();
    const code: string = v4();
    formData.append(code, file);
    axios
      .post(endpoint, formData)
      .then((res) => updateValue(res.data.imgLink))
      .catch((err) => console.error(err));
  }, [file]);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event || !event.target || !event.target.files) return;
    setFile(event.target.files[0]);
  };

  if (design === "DETAILED")
    return <div className="uploader-detailed-main"></div>;

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
      {isHovered ? (
        <label
          className="uploader-simple-text"
          onMouseLeave={() => setIsHovered(false)}
        >
          Upload an Image
          <input
            type="file"
            className="uploader-input"
            onChange={onChangeFile}
          />
        </label>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUploader;
