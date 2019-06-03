const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3500;

//app.use(bodyParser.json());
app.use('/widget', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, err) => {
  res.status(200).json({ message: 'hello there' });
});

app.listen(3500, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
