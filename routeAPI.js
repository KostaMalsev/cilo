const express = require('express')
const bodyParser = require('body-parser')
const dbResource = require('db.js')




class routeAPI {

  constructor(port,db) {
    this.app = new express();
    let options = {};
    this.server = require('https').createServer(options, app);

    this.app.use(bodyParser.json())

    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    
    this.server.listen(port, function() {
      logger.writeLog('Listening on port ' + port);
    });
    
    this.db = db;
  }

  get() {
    restApp.get('/', (request, response) => {
      response.json({
        info: 'Node.js, Express, and Postgres API'
      })
    });
  }

  getUsers() {
    restApp.get('/users', this.db.getUsers);
  }
  
};
