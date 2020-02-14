const express = require('express');
const routes = require("./routes")
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const port = process.env.PORT || 1337;
app.listen(port);

console.log('API funcionando');