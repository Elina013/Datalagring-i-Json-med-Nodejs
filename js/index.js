// index.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
    // Visa index.html här
});


app.get('/create', (req, res) => {
  // Visa formulär för att skapa användare
});

app.post('/create', (req, res) => {
  // Implementera skapandet av användare och spara i JSON-fil
});

app.get('/update/:userId', (req, res) => {
  // Visa formulär för att ändra användaruppgifter
});

app.post('/update/:userId', (req, res) => {
  // Implementera uppdatering av användaruppgifter
});

app.get('/users', (req, res) => {
  // Visa alla användare
});

// Starta servern
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});