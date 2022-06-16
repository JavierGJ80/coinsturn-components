const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadToS3 = async (file) => {
  const params = {
    Bucket: "corebookspass",
    Body: file,
    Key: file.name,
  };
  return s3.upload(params, (err, data) => {
    if (err) reject(err);
    resolve(data.Location);
  });
};

const uploadFile = async (req, res) => {
  const file = req.file;
  if (!file) res.status(500).send("Missing file");
  try {
    const location = await uploadToS3(file);
    if (!location) throw "Missing location";
    console.log(location);
    res.status(200).send(location);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading to Amazon S3");
  }
};

module.exports = uploadFile;
