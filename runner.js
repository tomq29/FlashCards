const Model = require('./Model');
const View = require('./View');
const Control = require('./Control');

const app = new Control(new Model(), new View());

app.runner();
