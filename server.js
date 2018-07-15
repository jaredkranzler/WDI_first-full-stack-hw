const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db')

app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const charactersController = require('./controllers/charactersController')


app.use('/characters', charactersController)


app.listen(3000, () => {
  console.log('i am listening on port 3000')
})