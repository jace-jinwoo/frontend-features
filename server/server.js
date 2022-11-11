const express = require("express");
const app = express();
const port = 5000;
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({storage});

app.get("/my-uploads", (req, res) => {
    console.log("req.url :: ", req.url)
    fs.readdir(`.${req.url}`, function(err, fileList) {
        if (err) {
            console.log("Err :: ", err);
            return ;
        }
        const filePack = [];
        console.log("fileList", fileList)
        fileList.map( file => {
            filePack.push({
                path: req.url + '/' +file
            })
        })
        
        console.log("filePack :: ", filePack)
        res.send(filePack);
    })
})

app.get("/my-uploads/?:filename", (req, res) => {
    
    console.log("req.url with params :: ", req.url)
    fs.readFile(`.${req.url}`, function(err, data) {
        if (err) {
            console.log("Err :: ", err);
            return ;
        }
        res.send(data)
    })
})

app.post("/upload", upload.single('file'), (req, res) => {
    console.log("upload req.file :: ", req.file);
    res.send(req.file)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})  