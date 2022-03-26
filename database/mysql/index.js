const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  database: 'YOUR_DATABASE_NAME_HERE'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});


module.exports = connection;



// Don't forget to export your functions!
