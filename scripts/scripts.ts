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

export const gitSync = async (
  oldRepo: string,
  newRepo: string,
  user: string,
  password: string
) => {
  if (!oldRepo) {
    console.error("Missing old repo url");
    return;
  }
  if (!newRepo) {
    console.error("Missing new repo");
  }
  if (!user) {
    console.error("Missing user");
    return;
  }
  if (!password) {
    console.error("Missing password");
    return;
  }
  const validUrlOld =
    /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(
      oldRepo
    );
  if (!validUrlOld) {
    console.error("Not a valid Url");
    return;
  }
  const validUrlNew =
    /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(
      oldRepo
    );
  if (!validUrlNew) {
    console.error("Not a valid Url");
    return;
  }
  const response = await axios.post(`${process.env.domain}/git/pushToNewRepo`, {
    oldRepo,
    newRepo,
    user,
    password,
  });
  if (response.status === 200) {
    console.log("Succesfully synced repos");
    return true;
  }
  return false;
};
