// console.log('Hello World');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more Designing</title>
      <style>
  .container{
      border: 3px solid red;
      background-color: tomato;
      padding: 34px;
      margin: 34px auto;
      width:532px;
  }
  .btn{
      background-color: rgb(224, 145, 224);
      padding:6px;
      border:none;
      cursor:pointer;
      font-size: 12px;
      font-weight: bold;
      font-family: fantasy;
      border-radius: 12px;
  
  }
  .btn:hover{
      color:darkslategray;
      background-color: deeppink;
      border:2px solid black;
  }
  a{
      text-decoration: none;
      color:black;
      /* font-style: bold; */
  }
  a:hover{
      color:rgb(138, 7, 7);
      background-color: brown;
  }
  a:visited{
  background-color: rgb(228, 231, 31);
  }
  a:active{
      background-color: darkgreen;
  
  }
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
          <h1>This is my Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nemo quisquam dolorum nam natus neque maxime aut. Mollitia ex quam tempora cumque eligendi repellendus voluptatibus voluptates aliquam. Suscipit obcaecati repudiandae hic quae deleniti tempore sed molestias?</p>
          <a href="https://google.com" target=_blank class="btn">Read More</a>
          <button class="btn">Contact Us</button>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});