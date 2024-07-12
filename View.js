const Model = require('./Model');
const inquirer = require('inquirer');

class View {
  getName() {
    return inquirer.default.prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' },
    ]);
  }

  getNameAndTopic() {
    return inquirer.default.prompt([
      {
        type: 'list',
        name: 'Topic',
        message: 'Выберите тему квиза',
        choices: [
          { name: 'Рандомные вопросы', value: 'randomQuestions' },
          { name: 'Искусство', value: 'artQuestions' },
          { name: 'Значение идиом', value: 'idiomsQuestions' },
          { name: 'Выход', value: 4 },
        ],
      },
    ]);
  }

  doQuiz(topic) {
    inquirer.default.prompt(topic).then((answers) =>
      console.log(
        `Ваше количество очков за Quiz: ${Object.values(answers)
          .map((answer) => Boolean(answer))
          .reduce((acc, item) => acc + item)}/${Object.values(answers).length}`
      )
    );
  }
}

module.exports = View;
