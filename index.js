const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { userId, collegeEmail, rollNumber, array } = req.body;

  const numbers = [];
  const alphabets = [];
  array.forEach((item) => {
    if (typeof item === 'number') {
      numbers.push(item);
    } else if (typeof item === 'string' && /^[A-Za-z]$/.test(item)) {
      alphabets.push(item);
    }
  });

  const sortAlphabet = [alphabets.sort()];
  const highestAlphabet = sortAlphabet[sortAlphabet.length-1]

  const response = {
    status: true,
    userId,
    collegeEmail,
    rollNumber,
    numbers,
    alphabets,
    highestAlphabet,
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
