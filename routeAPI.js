const express = require('express')
const bodyParser = require('body-parser')




export class routeAPI {

  constructor(port) {
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
    
  }

  get() {
    restApp.get('/', (request, response) => {
      response.json({
        info: 'Node.js, Express, and Postgres API'
      })
    });
  }

  getUsers(f) {
    restApp.get('/users', f);
  }
  
};



module.exports = {routeAPI};