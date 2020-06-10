const express = require("express");
const app = express();
const pcl3 = require("./PCL_3.json");

app.get("/pcl/3", (req, res) => {
  try {
    res.send(pcl3);
  } catch (error) {
    res.json({
      err: error.message,
    });
  }
});

app.get("/*", (req, res) => {
  res.json({
    error: "Sorry this route doesn't exist",
  });
});

app.listen(5000, () => console.log(`listening on port 5000`));
