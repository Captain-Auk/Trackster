const authMysql = require('mysql')

const connection = authMysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'userAuthentication'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected!');
});