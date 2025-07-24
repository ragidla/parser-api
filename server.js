const express = require('express');
const Mercury = require('@postlight/parser');
const app = express();

app.get('/parser', async (req, res) => {
  const url = req.query.url;
  try {
    const result = await Mercury.parse(url);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: 'Failed to parse URL', details: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mercury Parser listening on port ${port}`);
});
