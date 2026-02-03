const http = require("http");

http.createServer((req, res) => {
  const start = Date.now();
  while (Date.now() - start < 2000) {} // burn CPU for 2s
  res.end("Done\n");
}).listen(3000, () => {
  console.log("CPU hog server on 3000");
});
