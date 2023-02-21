const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("react app");
});

const PORT = 3002;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
