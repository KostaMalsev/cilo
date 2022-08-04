//Implementation of express

const express = require('express')

const bodyParser = require('body-parser')

const restApp = express();

const graphApp = express();


const dbLib = require('./db.js')


let auth = {
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432};
  
const db = new dbLib(auth);



const restPort = 3000


restApp.use(bodyParser.json())
restApp.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

restApp.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

restApp.get('/users', db.getUsers)


var server = require('https').createServer(options, restApp);

server.listen(port, function() {
    logger.writeLog('Listening on port ' + restPort);
});

var admin_server = require('https').createServer(options, admin_app);

admin_server.listen(admin_port, function() {
    logger.writeLog('Listening on admin port ' + admin_port);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

