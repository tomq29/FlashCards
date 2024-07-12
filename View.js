const Model = require('./Model');
const inquirer = require('inquirer');
const { EOL } = require('os');

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
          { name: 'Рандомные вопросы', value: Model.randomQuestions },
          { name: 'Искусство', value: Model.artQuestions },
          { name: 'Значение идиом', value: Model.idiomsQuestions },
          { name: 'Выход', value: 4 },
        ],
      },
    ]);
  }

  doQuiz(topic) {
    return inquirer.default.prompt(topic).then((answers) => {
      const score = Object.values(answers)
        .map((answer) => Boolean(answer))
        .reduce((acc, item) => acc + item);

      const remainder = 5 - score;

      const heart = '♡ ';

      const fullHeart = '❤︎ ';

      console.log(
        `Ваше количество очков за Quiz: ${score}/${
          Object.values(answers).length
        } ${EOL} ${EOL}  ${fullHeart.repeat(score)} ${heart.repeat(
          remainder
        )} ${EOL}`
      );

      return score;
    });
  }

  finalScore(username, num) {
    console.log(`${username}, твой общий счет ${num}/15`);
  }
}

module.exports = View;
