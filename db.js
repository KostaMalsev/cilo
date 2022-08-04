
const Pool = require('pg').Pool

export class db{
  
  constructor(conn)
  {
    this.pool = new Pool(conn);
  }
}

//conn:
/*
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})
*/

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



}

module.exports = {
  getUsers
}






























































