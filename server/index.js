const express = require('express');
const app = express();
const db = require('../database');
const PORT = 3000 || process.env.PORT;
const _ = require('underbar');

const requestLog = (req, url, next) => {
  console.log(`${req.method} is successful at ${req.url}`);
  next();
}

app.use(express.static('public'));

app.use(express.json());

app.use(requestLog)

app.get('/api/movies', (req, res) => {
  const sql = `SELECT * FROM movielist`;
  db.query(sql, (err, result) => {
    if (err) { console.log('get query error', err) }
    res.json(result)
  })
  //res.send('hello world');

})

app.get('/api/movies/watched', (req, res) => {
  const sql = `SELECT * FROM movielist WHERE watched = 1`
  db.query(sql, (err, result) => {
    if (err) { console.log('watched "get" query error', err) }
    res.json(result)
  })
})

app.get('/api/movies/towatch', (req, res) => {
  const sql = `SELECT * FROM movielist WHERE watched = 0`
  db.query(sql, (err, result) => {
    if (err) { console.log('towatch "get" query error ', err) }
    res.json(result)
  })
})

app.post('/api/movies', (req, res) => {
  const sql = `INSERT INTO movielist (title, watched) VALUES (?, ?)`;
  let { title, watched } = req.body;
  db.query(sql, [title, watched], (err, result) => {
    if (err) {
      console.log('post query error', err);
      res.send(500);
    } else {
      res.send('post query successful')
    }

  })
})

app.patch('/api/movies', (req, res) => {
  const sql = `UPDATE movielist SET watched = ${req.body.watched} WHERE title = '${req.body.title}'`
  db.query(sql, (err, result) => {
    if (err) {
      console.log('patch query error: ', err);
      res.sendStatus(500);
    } else {
      res.send('patch query success');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})