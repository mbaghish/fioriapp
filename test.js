const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    if (req.url === '/') {
        // Home page with links to other routes
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <head>
                    <title>Welcome Page</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                        }
                        h1 {
                            color: #333;
                        }
                        ul {
                            list-style-type: none;
                            padding: 0;
                        }
                        li {
                            margin: 10px 0;
                        }
                        a {
                            text-decoration: none;
                            color: #007BFF;
                        }
                        a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>Select one of the following options:</p>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/json">JSON Data</a></li>
                        <li><a href="/html">HTML Page</a></li>
                    </ul>
                </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the About page.');
    } else if (req.url === '/json') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: 'Hello, this is JSON data!',
            status: 200
        }));
    } else if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <head>
                    <title>HTML Response</title>
                </head>
                <body>
                    <h1>Welcome to the HTML page</h1>
                    <p>This is a simple HTML response.</p>
                    <p><a href="/">Back to Home</a></p>
                </body>
            </html>
        `);
    } else {
        // Handle 404 Not Found
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


/* simple version
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/