const express = require('express')
let routes = require("./routes")
const app = express()
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use("/",routes)
app.listen(8080, "0.0.0.0",() => {
    console.log("Serveur à l'écoute")
})