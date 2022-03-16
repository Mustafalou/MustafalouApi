const express = require('express')
let routes = require("./routes")
const sequelize = require("./db")
sequelize.sync()
const app = express()
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use("/",routes)
app.listen(8000, "0.0.0.0",() => {
    console.log("Serveur à l'écoute")
})