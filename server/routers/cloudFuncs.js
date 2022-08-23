const express = require("express");

const router = express.Router();

const uploadFile = require("../cloud_functions/uploadFileCF");

router.post("/uploadFile", uploadFile);

module.exports = router;
