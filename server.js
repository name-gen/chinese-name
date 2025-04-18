const express = require('express');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Read Excel file and parse to JSON
const workbook = xlsx.readFile('./names.xlsx');
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// API endpoint to return a random name
app.get('/api/random-name', (req, res) => {
  const random = data[Math.floor(Math.random() * data.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
