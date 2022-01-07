require('dotenv').config();

const { PORT = 3000, PASSWORD } = process.env;

module.exports = { PORT, PASSWORD };
