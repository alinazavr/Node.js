const http = require('http')

const fs = require('fs')

let data = ''

http.createServer((request, response) => {
  fs.readFile("header.html", 'UTF-8', (err, fileData) => {
    if (err) {
      console.log('Could not find or open file for reading\n');
      response.statusCode = 404;
      response.end();
    } else {
      data += fileData;
      fs.readFile("main.html", 'UTF-8', (err, fileData) => {
        if (err) {
          console.log(Could not find or open file for reading\n');
          response.statusCode = 404;
          response.end();
        } else {
          data += fileData;
          fs.readFile("footer.html", 'UTF-8', (err, fileData) => {
            if (err) {
              console.log('Could not find or open file for reading\n');
              response.statusCode = 404;
              response.end();
            } else {
              data += fileData;
              response.writeHead(200, { 'Content-Type': 'text/html' });
              response.end(data);
            }
          });
        }
      });
    }
  });
  console.log("Request accepted!\n");
}).listen(3000, () => {
  console.log("HTTP-Сервак готов и слушает порт 3000!\n");
});
