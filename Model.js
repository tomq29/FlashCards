class Model {
  static idiomsQuestions = [
    {
      type: 'list',
      name: 'question 1',
      message: 'Как переводится данная идиома?\n  Идиома: "Piece of cake" ',
      choices: [
        { name: 'Кусок торта', value: 0 },
        { name: 'Очень очевидно', value: 0 },
        { name: 'Легкое дело', value: 1 },
      ],
    },
    {
      type: 'list',
      name: 'question 2',
      message:
        'Как переводится данная идиома?\n  Идиома: "Hit the nail on the head" ',
      choices: [
        { name: 'Ударить гвоздь по голове', value: 0 },
        { name: 'Попасть в яблочко', value: 1 },
        { name: 'Огрести неприятности', value: 0 },
      ],
    },
    {
      type: 'list',
      name: 'question 3',
      message:
        'Как переводится данная идиома?\n  Идиома: "Let the cat out of the bag" ',
      choices: [
        { name: 'Выпустить кошку из мешка', value: 0 },
        { name: 'Пустить в ход обман', value: 0 },
        { name: 'Рассказать секрет', value: 1 },
      ],
    },
    {
      type: 'list',
      name: 'question 4',
      message:
        'Как переводится данная идиома?\n  Идиома: "Cost an arm and a leg" ',
      choices: [
        { name: 'Очень дорого стоить', value: 1 },
        { name: 'Продавать органы', value: 0 },
        { name: 'Стоить целое состояние', value: 0 },
      ],
    },
    {
      type: 'list',
      name: 'question 5',
      message: 'Как переводится данная идиома?\n  Идиома:  "Kick the bucket" ',
      choices: [
        { name: 'Пнуть ведро', value: 0 },
        { name: 'Уйти на покой', value: 1 },
        { name: 'Сильно расстроиться', value: 0 },
      ],
    },
  ];

  static randomQuestions = [
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

  static artQuestions = [
    {
      type: 'list',
      name: 'question 1',
      message: 'Выберете самую известную мексиканскую художницу из списка:',
      choices: [
        { name: 'Ева Лонгория', value: 0 },
        { name: 'Фрида Кало', value: 1 },
        { name: 'Леонора Каррингтон', value: 0 },
      ],
    },
    {
      type: 'list',
      name: 'question 2',
      message: 'А. Саврасов, И. Левитан, И. Шишкин – художники...',
      choices: [
        { name: 'пейзажисты', value: 1 },
        { name: 'анималисты', value: 0 },
        { name: 'маринисты', value: 0 },
      ],
    },
    {
      type: 'list',
      name: 'question 3',
      message: 'Сколько мишек изображено на картине «Утро в сосновом лесу»? ',
      choices: [
        { name: 'два', value: 0 },
        { name: 'три', value: 0 },
        { name: 'четыре', value: 1 },
      ],
    },
    {
      type: 'list',
      name: 'question 4',
      message: 'Как называются чёрные, белые и серые цвета?',
      choices: [
        { name: 'хроматические', value: 0 },
        { name: 'ахроматические', value: 1 },
        { name: 'хромые', value: 0 },
      ],
    },
    {
      type: 'list',
      name: 'question 5',
      message: 'Каким даром обладал французский художник В.Ван Гог? ',
      choices: [
        { name: 'видел воздушные потоки', value: 1 },
        { name: 'турбулентность', value: 0 },
        { name: 'Леонора каррингтон', value: 0 },
      ],
    },
  ];
}

module.exports = Model;

