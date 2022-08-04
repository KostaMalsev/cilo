const express = require('express')
const bodyParser = require('body-parser')


class routeAPI {

  constructor(port) 
  {
    this.app = new express();
    let options = {};
    this.restServer = require('https').createServer(options, app);

    restServer.listen(port, function() {
      logger.writeLog('Listening on port ' + port);
    });
    
  }
  
  get(conn)
  {
    restApp.get('/', (request, response) => {
      response.json({ info: 'Node.js, Express, and Postgres API' })
    });
  }
  
  getUsers(conn)
  {
    restApp.get('/users', conn.getUsers);
  }
};


