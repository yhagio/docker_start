const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("Hello there!"));
app.listen(8080, () => console.log("Started at port 8080"));
