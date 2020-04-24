const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoApp = express();

todoApp.use(bodyParser.json());
todoApp.use(cors());

const mongoCommands = require('./routes/api/mongoCommands');

const mongoUserCommands = require('./routes/api/UserMongoCommands')

todoApp.use('/api/mongoCommands', mongoCommands);

todoApp.use('/api/UserMongoCommands', mongoUserCommands);

const port = 5000;

todoApp.listen(port);