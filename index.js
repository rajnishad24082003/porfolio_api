let express = require("express");
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  let arr = req.rawHeaders.slice();
  //res.send(arr[7] + arr[15] + arr[17]);
  res.send(`${req.socket.remoteAddress} ${req.socket.remoteAddress} ${req.ip}`);
  console.log(req);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port : ${process.env.PORT}`);
});
