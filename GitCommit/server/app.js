// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import { readFile } from "./src/readFile"

// var file = require("./src/readFile")

const express = require('express')
const shell = require("shelljs");
const https = require('https');
const cors = require('cors');
const app = express()
const utils = require("./utils");
const port = 3000;

app.use(cors());
// app.get('/', (req, res) => {
//     let output = shell.exec("git diff 23a8f456d71fc2e2acc658dac9a19bb32e548378");
//     res.send(output);
// })
//https://gitlab.industrysoftware.automation.siemens.com/mainstream-eng-cloud/mercury-ui2/commit/23a8f456d71fc2e2acc658dac9a19bb32e548378

app.post('/', (req, res) => {
    res.send('Hello World!')
})

//http://localhost:1234/repositories/:owner/:repository/commit/:commitSHA (as
app.get('/repositories/:owner/:repository/commits/:commitSHA/diff', async function (req, res) {
    const owner = req.params.owner;
    const reponame = req.params.repository;
    const commitSHA = req.params.commitSHA;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + owner + '/' + reponame + '/commits' + '/' + commitSHA,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        }
    }
    https.get(options, function (resp) {
        let data = [];
        
        resp.on('data', chunk => {
            data.push(chunk);
        });

        resp.on('end', () => {
            const respData = JSON.parse(Buffer.concat(data).toString());
            const filteredData = utils.generateResponse(respData);
            res.json(filteredData);
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('500 - Internal server error');
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})