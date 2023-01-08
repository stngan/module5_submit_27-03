const express = require('express');
const app = express()
const port = 3000
const path = require('path'); // dùng path 


// cấu hình static file
app.use(express.static(path.join(__dirname, 'static')));;

//HTTP logger 
const morgan = require('morgan')
app.use(morgan('combined'))

//template engine
const handlebars = require("express-handlebars");

app.engine("hbs", handlebars.engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// router điều hướng đến các page
app.get("/", (req, res) => {
  res.render("home"); // trỏ tới home.handlebars
}); 
app.get("/news", (req, res) => {
  res.render("news"); // trỏ tới home.handlebars
}); 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

