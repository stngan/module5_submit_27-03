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

const cors = require("cors")
app.use(cors())
let database=[
  {"bookID":"b1","bookName":"Kỹ thuật lập trình cơ bản", "price":70,"image":"b1.jpg"},
  {"bookID":"b2","bookName":"Kỹ thuật lập trình nâng cao", "price":100,"image":"b2.jpg"},
  {"bookID":"b3","bookName":"Máy học cơ bản","price":200,"image":"b3.jpg"},
  {"bookID":"b4","bookName":"Máy học nâng cao","price":300,"image":"b4.png"},
  {"bookID":"b5","bookName":"Lập trình Robot cơ bản","price":250,"image":"b5.jpg"},
]
app.get("/books", cors(), (req,res)=>{
  res.send(database)
})

app.get("/books/:id", cors(), (req, res) => {
  id = req.params["id"];
  let p = database.find( x => x.bookID == id )
  res.send(p)
})

app.get("/books/:minprice/:maxprice", cors() , (req, res) => {
  console.log(req.params.minprice, req.params.maxprice)
  let p = database.filter ( 
    x => x.price >= req.params.minprice
    && 
    x.price <= req.params.maxprice)
    res.send(p)
})