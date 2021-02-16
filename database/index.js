const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'movies'
})


connection.connect((err) => {
  if(err) { return console.log('connection error', err)}
  console.log('connected to mysql database');
})


module.exports = connection;