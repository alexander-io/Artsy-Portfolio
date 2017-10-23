let express = require('express')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
let fs = require('fs')

// mongo
var MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/klee'

// use connect method to connect to mongo server
MongoClient.connect(url, function(err, db) {
  console.log('connected to mongo server successfully');
  db.close()
})

server.listen(8080)

let lst_of_images_file_titles = []
let art_image_directory_path = __dirname + '/art_works_img/'
fs.readdir(art_image_directory_path, (err, files) => {
    files.forEach(file => {
      lst_of_images_file_titles.push(file)
      console.log(file)
    })
})

setTimeout(function(){
  console.log(lst_of_images_file_titles);

  for (let x = 0; x < lst_of_images_file_titles.length; x++) {
    app.get('/' + lst_of_images_file_titles[x], function(req, res) {
      res.sendFile(__dirname + '/art_works_img/' + lst_of_images_file_titles[x])
    })
  }
}, 500)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/plax_carousel.html', function(req, res) {
  res.sendFile(__dirname + '/public/plax_carousel.html')
})

app.get('/jquery.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.js')
})

app.get('/materialize.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/js/materialize.js')
})

app.get('/materialize.css', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/css/materialize.css')
})

app.get('/fonts/roboto/Roboto-Regular.woff', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff')
})

app.get('/fonts/roboto/Roboto-Regular.woff2', function(req, res) {
  res.sendFile(__dirname + '/node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2')
})

app.get('/WhiteVase2.jpg', function(req, res) {
  res.sendFile(__dirname + '/art_works_img/WhiteVase2.jpg')
})

app.get('/CarvedFlowerVase3.jpg', function(req, res) {
  res.sendFile(__dirname + '/art_works_img/CarvedFlowerVase3.jpg')
})

app.get('/socket.io.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/socket.io/')
})

app.get('/LOGO.jpg', function(req, res) {
  res.sendFile(__dirname + '/art_works_img/LOGO.jpg')
})

app.get('/Buddha2.jpg', function(req, res) {
  res.sendFile(__dirname + '/art_works_img/Buddha2.jpg')
})

app.get('/CobaltMatcha.jpg', function(req, res) {
  res.sendFile(__dirname + '/art_works_img/CobaltMatcha.jpg')
})

io.on('connection', function(socket) {
  socket.emit('event', lst_of_images_file_titles)
  // socket.io('')
  socket.on('other event', function(data) {
    console.log(data)
  })
})
