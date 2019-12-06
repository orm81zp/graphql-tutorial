const result = require('dotenv').config();

if (result.error) {
  throw result.error
}

module.exports = {
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASWORD: process.env.MONGODB_PASWORD,
};
