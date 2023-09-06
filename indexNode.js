const express = require('express')
const app = express()
const path = require('path');
const fs = require("fs");
const csvWriter = require('csv-write-stream');

app.use(express.static('static'))
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"))
})
app.post('/age', (req, res) => {
  try {
    const writer = csvWriter({ 
      headers: ["flexibility", "response-time", "balance-time", "medication-count", "guessed-age", "actual-age"], 
      sendHeaders: false
    });
    writer.pipe(fs.createWriteStream('./static/data.csv', { flags: 'a' }))
    writer.write(req.body.ageData)
    writer.end()
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})

app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})