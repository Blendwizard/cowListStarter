const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
db = require('../database/mysql');

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})


app.get('/api/cows', (req, res) => {
  db.getCows((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
})

app.post('/api/cows', (req, res) => {
  var name = req.body.name;
  var description = req.body.description;

  db.insertCow(name, description, (err, success) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(success);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    // readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
    //   if(choice==='mongo') {
    //     console.log('Your db is Mongo');
    //     db = require('../database/mongo');
    //   } else if(choice === 'mysql') {
    //     console.log('Your db is mysql');
    //     db = require('../database/mysql');
    //   } else {
    //     console.log('Stop node, restart and try again, valid options are mysql and mongo')
    //   }
    // })

});
