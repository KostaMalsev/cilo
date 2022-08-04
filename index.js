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



const restPort = 3000;
const graphPort = 3001;


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


var restServer = require('https').createServer(options, restApp);

restServer.listen(port, function() {
    logger.writeLog('Listening on port ' + restPort);
});

var graphServer = require('https').createServer(options, graphApp);

graphServer.listen(admin_port, function() {
    logger.writeLog('Listening on graph port ' + graphPort);
});

restServer.listen(port, () => {
  console.log(`App running on port ${graphPort}.`)
})

