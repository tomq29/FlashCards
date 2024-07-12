const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'question 1',
    message: 'Театр, по мнению Станиславского, начинается с …',

    validate(value) {
      if (
        value.toLowerCase() === 'вешалки' ||
        value.toLowerCase() === 'вешалка'
      ) {
        return true;
      }

      return 'Не правильный ответ, попробуй еще';
    },
  },
  {
    type: 'input',
    name: 'question 2',
    message: 'Братья Люмьер изобрели',

    validate(value) {
      if (
        value.toLowerCase() === 'кинематограф' ||
        value.toLowerCase() === 'кино'
      ) {
        return true;
      }

      return 'Не правильный ответ, попробуй еще';
    },
  },
  {
    type: 'input',
    name: 'question 3',
    message: 'Самое известное изобретение Нобеля – это …',

    validate(value) {
      if (value.toLowerCase() === 'динамит') {
        return true;
      }

      return 'Не правильный ответ, попробуй еще';
    },
  },
  {
    type: 'input',
    name: 'question 4',
    message: 'Бетховен написал … опер.',

    validate(value) {
      if (value === '1') {
        return true;
      }

      return 'Не правильный ответ, попробуй еще';
    },
  },
  {
    type: 'input',
    name: 'question 5',
    message:
      'Назовите плащ, который создан из прорезиненной непромокаемой ткани.',

    validate(value) {
      if (value.toLowerCase() === 'макинтош') {
        return true;
      }

      return 'Не правильный ответ, попробуй еще';
    },
  },
];

inquirer.default.prompt(questions).then((answers) => {
  console.log('Ваше количество очков за Random Quiz: 5/5');
});
