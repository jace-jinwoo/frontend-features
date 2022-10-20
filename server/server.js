const express = require("express");
const app = express();
const port = 5000

const data = require('./data');

app.get("/api", (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})  