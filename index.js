const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.json())
// Serve static files
app.use(express.static(path.join(__dirname, 'public/useless')));

//const filePath = path.resolve(__dirname, './public/useless/logih.html');

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/useless/logih.html'));
});
app.post('/login/submit', (req, res) => {
    console.log(req)
    res.json({
        data:"get data"
    })
  });
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './public/useless/signup.html'));
});
app.get('/front', (req, res) => {
    res.sendFile(path.join(__dirname, './public/useless/front.html'));
  });
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});