const express = require('express');
const cors = require('cors');

require('dotenv').config()

const PORT = 3333;
const HOST = 'http://localhost';
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`[SERVER]: ${HOST}:${PORT} - ${new Date().toLocaleString()}`);
});
