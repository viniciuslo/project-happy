// import pacote
const express = require("express");
const server = express();
const path = require("path");
const pages = require("./pages.js");

server.use(express.static("public"))        //configurando arquivos staticos
.set('views',path.join(__dirname, "views"))  //configurando template engine
.set('view engine', 'hbs')                  //configurando template engine
.get("/", pages.index)
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanage);

//iniciando servidor
server.listen(5500);
