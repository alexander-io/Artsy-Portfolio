let express = require('express')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
let fs = require('fs')

server.listen(8080)

let art_image_directory_path = __dirname + '/art_works_img/'

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
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

app.get('/socket.io.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/socket.io/')
})

io.on('connection', function(socket) {
  socket.emit('event', {hello : 'world'})
  // socket.io('')
  socket.on('other event', function(data) {
    console.log(data)
  })
})
