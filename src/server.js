// import pacote
const express = require("express");
const server = express();
const path = require("path");
const pages = require("./pages.js");

server
.use(express.urlencoded({ extended: true }))    //configuração para pegar o boddy da request
.use(express.static("public"))                  //configurando arquivos staticos
.set('views',path.join(__dirname, "views"))     //configurando template engine
.set('view engine', 'hbs')                      //configurando template engine
.get("/", pages.index)
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanage)
.post("/save-orphanage", pages.saveOrphanage);

//iniciando servidor
server.listen(5500);
