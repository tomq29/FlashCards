const Model = require('./Model');
const View = require('./View');

class Controll {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controll(new Model(), new View());

console.log(app);