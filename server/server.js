const express = require("express");
const app = express();
const port = 5000;
const multer = require("multer");
const upload = multer();

app.post("/api/imgs/fileUpload", upload.single('file'), (req, res) => {
    console.log("req.file :: ", req.file);
    console.log("req.body :: ", req.body);
    // res.send(res.data)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})  