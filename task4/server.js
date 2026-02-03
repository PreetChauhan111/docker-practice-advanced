const { spawn } = require("child_process");
const http = require("http");

http.createServer((req, res) => {
  const child = spawn("sh", ["-c", "sleep 1"]);
  child.on("exit", () => {});
  res.end("Spawned\n");
}).listen(3000, () => {
  console.log("Zombie server on 3000");
});
