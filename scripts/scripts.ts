import { v4 } from "uuid";
import axios from "axios";

const imageTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/ico",
  "image/gif",
];

export type FileType = "IMAGE" | "FILE";

export const uploadFile = async (
  file: File,
  endpoint: string,
  type: FileType
) => {
  return new Promise((resolve, reject) => {
    if (!file) reject("Missing file");
    if (type === "IMAGE" && !imageTypes.includes(file.type)) {
      reject("Not an image");
    }

    let formData = new FormData();
    const code = v4();

    formData.append(code, file, `${code}.${file.name.split(".").at(-1)}`);

    axios
      .post(endpoint, formData, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
