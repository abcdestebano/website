const express = require("express")

// Varibles declariations
const port = process.env.PORT || 9000;
const server = express();

// Middlewares
server.use(express.static(__dirname + '/build'))

server.get("*", (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
