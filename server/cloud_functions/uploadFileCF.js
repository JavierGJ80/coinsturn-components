const AWS = require("aws-sdk");
require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Body: file.data,
    Key: file.name,
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) reject(err);
      resolve(data.Location);
    });
  });
};

const uploadFile = async (req, res) => {
  if (!req.files || !Object.values(req.files)[0]) {
    res.status(500).send("Missing file");
    return;
  }
  const file = Object.values(req.files)[0];
  try {
    const location = await uploadToS3(file);
    if (!location) throw "Missing location";
    res.status(200).send(location);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading to Amazon S3");
    return;
  }
};

module.exports = uploadFile;
