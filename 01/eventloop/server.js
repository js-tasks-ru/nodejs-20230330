const http = require('node:http');

const server = new http.Server();

// req1, req2, req3: [3s, 6s, 9s]
// task queue: [setTimeout, setTimeout, setTimeout]
server.on('request', (req, res) => {
    // const now = Date.now();
    // while(now + 3000 > Date.now()) {}

    setTimeout(() => {
        res.end('hello world');
    }, 3000);
});

server.listen(3000);
