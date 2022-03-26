const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cow_database'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

connection.getCows = (callback) => {
  var query = 'SELECT * FROM cows_table';
  connection.query(query, (err, cows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, cows);
    }
  })
}

connection.insertCow = (name, description, callback) => {
  var query = 'INSERT INTO cows_table VALUES (null, ?, ?)';
  var queryArgs = [name, description];
  connection.query(query, queryArgs, (err, result) => {
    if (err) {
      callback(err);
    } else {
      console.log(`Saving new cow: "${name}" into database....`)
      callback(null, result);
    }
  })
}


module.exports = connection;



// Don't forget to export your functions!
