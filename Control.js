const Model = require("./Model");
const View = require("./View");

class Controll {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  async startQuiz() {
    const choice = await this.view.getNameAndTopic();
  
   // console.log(x);
    if(choice.Topic === 1){
      await this.view.doQuiz(Model.randomQuestions)
    }
    else if(choice.Topic === 2){
      await this.view.doQuiz(Model.artQuestions)
    }
    else if(choice.Topic === 3){
      await this.view.doQuiz(Model.idiomsQuestions)
    }
  }
}

const app = new Controll(new Model(), new View());
app.startQuiz()
