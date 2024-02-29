var express = require("express");
var router = express.Router();

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const uniqid = require("uniqid");

router.post("/upload", async (req, res) => {
  const photoPath = `./tmp/${uniqid()}.jpg`;
  const resultMove = await req.files.photoFromFront.mv(photoPath);

  if (!resultMove) {
    const resultCloudinary = await cloudinary.uploader.upload(photoPath);
    console.log(resultCloudinary);
    fs.unlinkSync(photoPath);
    return res.json({ result: true, url: resultCloudinary.secure_url });
  } else {
    return res.json({ result: false, error: resultCopy });
  }
});

module.exports = router;
