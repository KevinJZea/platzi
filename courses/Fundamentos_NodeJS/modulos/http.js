const http = require("http");

http.createServer(router).listen(3000);

function router(request, response) {
  console.log("Nueva petición");
  console.log(request.url);

  switch(request.url) {
    case "/hola":
      response.write("Hola, ¿qué tal?");
      response.end();
      break;

    default:
      response.write("Error 404: No sé lo que quieres");
      response.end();
  }

  response.writeHead(201, { "Content-Type": "text/plain" });

  // response.write("Hola, ya sé usar HTTP de NodeJS");

  response.end();
}

console.log("Escuchando HTTP en el puerto 3000");