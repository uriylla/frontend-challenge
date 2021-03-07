const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const path = require('path');
const cors = require('cors')

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3030, () => {
  console.log('App listening on port 3030')
});
