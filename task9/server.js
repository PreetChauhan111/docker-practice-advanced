const http = require("http");

let healthy = true;

// Main app server
http.createServer((req, res) => {
  if (!healthy) {
    res.statusCode = 500;
    return res.end("App unhealthy\n");
  }
  res.end("App healthy\n");
}).listen(3000, () => {
  console.log("App listening on 3000");
});

// Healthcheck endpoint (used by Docker)
http.createServer((req, res) => {
  if (healthy) {
    res.statusCode = 200;
    res.end("OK\n");
  } else {
    res.statusCode = 500;
    res.end("FAIL\n");
  }
}).listen(3001, () => {
  console.log("Healthcheck on 3001");
});

// Simulate failure after 10 seconds
setTimeout(() => {
  console.log("Simulating failure...");
  healthy = false;
}, 10000);
