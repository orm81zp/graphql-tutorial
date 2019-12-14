const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('../schema/schema');
const cors = require('cors');

const {MONGODB_USER, MONGODB_PASWORD, PORT} = require('../config');

mongoose.connect(`mongodb://${MONGODB_USER}:${MONGODB_PASWORD}@ds249623.mlab.com:49623/graphql-tutorial`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Server started! http://localhost:${PORT}`)
})