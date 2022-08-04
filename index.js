//Implementation of express

const dbLib = require('./db.js')

routeGraph =  require('routeGraph.js')
routeRest =  require('routeRest.js')

let auth = {
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432};
  
  
const db = new dbLib(auth);



const restPort = 3000;
const graphPort = 3001;

let rest = routeRest(restPort);

let graph = routeGraph(graphPort);

rest.get()

graph.get();

rest.getUsers(db.getUsers);

graph.getUsers(db.getUsers);


/*
restApp.use(bodyParser.json())

restApp.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
*/



