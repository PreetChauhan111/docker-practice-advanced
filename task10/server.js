const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/error") {
    console.error("Simulated error occurred");
    res.statusCode = 500;
    return res.end("Error\n");
  }

  console.log(`Request received at ${new Date().toISOString()}`);
  setTimeout(() => {
    res.end("OK\n");
  }, 1000);
}).listen(3000, () => {
  console.log("Observability server on 3000");
});
