const Model = require('./Model')
const inquirer = require('inquirer');

class View {

   getNameAndTopic () {
    return inquirer.default.prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' },
      {
        type: 'list',
        name: 'Topic',
        message: 'Выберите тему квиза',
        choices: [
          { name: 'Рандомные вопросы', value: 1 },
          { name: 'Искусство', value: 2 },
          { name: 'Значение идиом', value: 3 },
        ],
      },
    ])
  }

   doQuiz (topic) {
    inquirer.default.prompt(topic).then((answers) =>
      console.log(
        `Ваше количество очков за Quiz: ${Object.values(answers).map((answer) => Boolean(answer)).reduce(
          (acc, item) => acc + item
        )}/${Object.values(answers).length}`
      ));
  }

}

module.exports = View;

