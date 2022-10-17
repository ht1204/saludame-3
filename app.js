const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");


const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
    const { body: { name } } = req;
    const paramName = name ? name : '';
    const msgResponse = ['<h1>Hola ', paramName, '!</h1>'].join('');
    res.status(202).send(msgResponse);
});


app.listen(PORT, () => {
  console.log("Server started on port 3000");
});


