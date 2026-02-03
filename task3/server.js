const http = require("http");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end("Handled\n");
  }, 2000);
});

server.listen(3000, () => {
  console.log("Server listening on 3000");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
