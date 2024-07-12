class Control {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.finalScore = 0;
    this.name = '';
  }
  async getName() {
    const { username } = await this.view.getName();
    this.name = username;
  }

  async startQuiz() {
    const { Topic } = await this.view.getNameAndTopic();

    if (Topic === 4) {
      return this.view.finalScore(this.name, this.finalScore);
    }

    const score = await this.view.doQuiz(Topic);
    this.finalScore += score;

    return this.startQuiz();

    // Для Полины. Legacy code ❤︎
    // else if(choice.Topic === 2){
    //   await this.view.doQuiz(Model.artQuestions)
    // }
    // else if(choice.Topic === 3){
    //   await this.view.doQuiz(Model.idiomsQuestions)
    // }
  }

  async runner() {
    await this.getName();
    await this.startQuiz();
  }
}

module.exports = Control;
