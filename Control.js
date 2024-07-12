const Model = require("./Model");
const View = require("./View");

class Controll {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  async get(params) {
    const x = await this.view.getNameAndTopic();
    console.log(x);
  }
}

const app = new Controll(new Model(), new View());
app.get()
