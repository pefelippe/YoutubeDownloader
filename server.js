const express = require ("express")

const app = express()

app.get('/', (req, res) => {
  res.send("Hello.")
});


app.get('/download', (req, res) => {
  var URL = req.query.URL;
  res.json({url:URL});
});

app.listen(3001, () =>{
  console.log("Works.")
});  