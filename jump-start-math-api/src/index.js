const app = require('./server');

const PORT = 3333;
const HOST = 'http://localhost';
const now = new Date().toLocaleString();

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT} - ${now}`);
});
