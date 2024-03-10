const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.post('/write-to-json', (req, res) => {
  const data = req.body;
  const jsonData = JSON.stringify(data);

  // Write data to the 'data.json' file
  fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
      return;
    }
    res.status(200).send('Data saved successfully');
  });
});

// Serve the main HTML file for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});