const express = require("express");
const app = express();
const routes = require("./router/routes");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const cokieParser = require("cookie-parser");

const Games = require('./models/games')
const Categoria = require("./models/categoria")


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// COKIE PASSER
app.use(cokieParser("kjsdçlfjsl"));
// EXPRESS SESSION
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

// EXPRESS FLASH
app.use(flash());

app.use("/", routes);

app.listen(4001, () => {
  console.log("servidor rodando http://localhost:4001");
});
