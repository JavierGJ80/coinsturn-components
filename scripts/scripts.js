const { v4 } = require("uuid");
const axios = require("axios");
require("dotenv").config();

const imageTypes = ["image/png", "image/jpg", "image/jpeg"];

export const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    if (!file) reject("Missing file");
    if (!imageTypes.includes(file.type)) reject("Not an image");

    let formData = new FormData();
    const code = v4();

    formData.append(code, file, `${code}.${file.name.split(".").at(-1)}`);

    axios
      .post(
        `${
          process.env.DOMAIN ? process.env.DOMAIN : "http://localhost:8080"
        }/cloudFunctions/uploadFile`,
        formData,
        {
          headers: {
            "Content-Type": "application/octet-stream",
          },
        }
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
