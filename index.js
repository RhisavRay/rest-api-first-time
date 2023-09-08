const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { full_name_ddmmyyyy, numbers, alphabets } = req.body;

  // Calculate the highest alphabet
  const highestAlphabet = alphabets.reduce((max, current) => (current > max ? current : max));

  // Prepare the response JSON
  const response = {
    user_id: full_name_ddmmyyyy,
    is_success: true, // You can set this based on your logic
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.status(200).json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  // Hardcoded response for GET request
  const operationCode = 1;

  res.status(200).json({ operation_code: operationCode });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
