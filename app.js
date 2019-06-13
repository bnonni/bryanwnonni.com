/*jshint esversion: 6 */

const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const fs = require('fs');
const port = 8080;
var reload = require('reload');

const server = http.createServer((req, res) => {
n
    /*initial server settings*/
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    /*render html, css, js files*/
    fs.readFile('index.html', (err, html) => {
        var page = url.parse(req.url).pathname;
        if (err) {
            throw err;
        } else if (page == 'index.html') {
            res.write(html);
        }
    });
    // res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});