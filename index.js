//Implementation of express

const express = require('express')

const bodyParser = require('body-parser')

const restApp = express();


const dbLib = require('./db.js')


let auth = {
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432};
  
const db = new dbLib(auth);



const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


var server = require('https').createServer(options, app);

server.listen(port, function() {
    logger.writeLog('Listening on port ' + port);
});

var admin_server = require('https').createServer(options, admin_app);

admin_server.listen(admin_port, function() {
    logger.writeLog('Listening on admin port ' + admin_port);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

