const express = require("express");
const fs = require("fs");
 
const app = express();
const PORT = 3000;
 
// folder for persistent data
const DATA_FILE = "./data/message.txt";
 
app.get("/", (req, res) => {
  let message = "No data yet";
  if (fs.existsSync(DATA_FILE)) {
    message = fs.readFileSync(DATA_FILE, "utf-8");
  }
  res.send(`Message: ${message}`);
});
 
app.get("/save/:msg", (req, res) => {
  fs.mkdirSync("./data", { recursive: true });
  fs.writeFileSync(DATA_FILE, req.params.msg);
  res.send("Message saved");
});
 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});