const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/twitter_stuff/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "twitter_stuff", req.params.filename));
});

app.listen(1337, () => {
  console.log("listening on the leet channel");
});
