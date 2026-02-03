// server.js
const buffers = [];

setInterval(() => {
  const buf = Buffer.allocUnsafe(10 * 1024 * 1024);
  buf.fill(1);              // 🔥 TOUCH the memory
  buffers.push(buf);
  console.log(`Allocated: ${buffers.length * 10} MB`);
}, 500);
