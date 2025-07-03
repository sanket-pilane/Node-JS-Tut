const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end("Hello World");
});

server.listen(8000, () => console.log("server Started at port 8000"));
