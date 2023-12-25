const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/submit-form', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch');

    const maakeetooResponse = await fetch(
      'https://forms.maakeetoo.com/formapi/1024',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Code: req.headers['code'] || 'BO9EOWEOUDA7FQX7Z4EDW4OC8',
        },
        body: JSON.stringify(req.body),
      }
    );

    if (!maakeetooResponse.ok) {
      throw new Error(
        `Maakeetoo API returned ${maakeetooResponse.status}: ${maakeetooResponse.statusText}`
      );
    }

    const maakeetooData = await maakeetooResponse.json();
    res.json(maakeetooData);
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
