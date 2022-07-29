const express = require("express");
const path = require("path");

const app = express();

// this sets the static folder
app.use("/public", express.static(path.resolve(__dirname, "client", "public")));

// this is the main configuration from the server for the SPA application
// this routes every url to the index.html while still maintaining the url
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
