const { spawn } = require("child_process");
const http = require("http");

let children = [];

http.createServer((req, res) => {
  const child = spawn("sh", ["-c", "sleep 30"]);
  children.push(child);
  res.end("Child started\n");
}).listen(3000, () => {
  console.log("Server on 3000");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  children.forEach(child => child.kill("SIGTERM"));
  setTimeout(() => {
    console.log("Exiting");
    process.exit(0);
  }, 1000);
});
