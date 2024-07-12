const inquirer = require('inquirer');

const questions1 = [
  {
    type: 'checkbox',
    message: 'Select toppings',
    name: 'toppings',
    choices: [
      new inquirer.default.Separator(' = The Meats = '),
      {
        name: 'Pepperoni',
      },
      {
        name: 'Ham',
      },
      {
        name: 'Ground Meat',
      },
      {
        name: 'Bacon',
      },
      new inquirer.default.Separator(' = The Cheeses = '),
      {
        name: 'Mozzarella',
        checked: true,
      },
      {
        name: 'Cheddar',
      },
      {
        name: 'Parmesan',
      },
      new inquirer.default.Separator(' = The usual ='),
      {
        name: 'Mushroom',
      },
      {
        name: 'Tomato',
      },
      new inquirer.default.Separator(' = The extras = '),
      {
        name: 'Pineapple',
      },
      {
        name: 'Olives',
        disabled: 'out of stock',
      },
      {
        name: 'Extra cheese',
      },
    ],
    validate(answer) {
      if (answer.length === 0) {
        return 'You must choose at least one topping.';
      }

      return true;
    },
  },
];

const questions2 = [
  { type: 'input', name: 'username', message: 'Введи имя:' },
  {
    type: 'list',
    name: 'bonuses',
    message: 'На сколько ты опоздал?',
    choices: [
      { name: 'Не опаздывал', value: 0 },
      { name: 'На 2-3 минутки', value: 2 },
      { name: 'Опоздал и не сообщил', value: 5 },
    ],
  },
];

const arr = [questions1, questions2];

arr.forEach((el) => {
  answers(el);
});

 function answers(question) {
  const ans =  inquirer.default.prompt(question);

  console.log(ans);
}
