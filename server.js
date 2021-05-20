const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5001',
};

const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

require('./src/routes/role.routes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

// const db = require('./src/model');

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });
