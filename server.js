let express = require('express')
let app = express()

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

// node_modules/materialize-css/dist/fonts/roboto/Roboto-Medium.woff
// node_modules/materialize-css/dist/fonts/roboto/Roboto-Medium.woff2

app.listen(8080, function() {
  console.log('listening on 8080');
})
