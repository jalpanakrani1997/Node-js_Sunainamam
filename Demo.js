// const fs = require("fs")

// fs.writeFileSync("Hello.txt", "Hello, World!");

// var a = fs.readFileSync("Hello.txt")

const fs = require('fs');

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });

    fs.writeFileSync("jalpa.txt", "Hello, welcome to Node.js 1234");

    const data = fs.readFileSync("jalpa.txt");

    response.write("File Content: " + data);
    response.end();
});

server.listen(1234, () => {
    console.log("Server is running on http://localhost:1234");
});
