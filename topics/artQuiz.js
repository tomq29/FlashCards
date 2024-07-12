const inquirer = require("inquirer");

const artQuiz = inquirer.default
  .prompt([
    {
      type: "list",
      name: "question 1",
      message: "Выберете самую известную мексиканскую художницу из списка:",
      choices: [
        { name: "Ева лонгория", value: 0 },
        { name: "Фрида кало", value: 1 },
        { name: "Леонора каррингтон", value: 0 },
      ],
    },
    {
      type: "list",
      name: "question 2",
      message: "А. Саврасов, И. Левитан, И. Шишкин – художники...",
      choices: [
        { name: "пейзажисты", value: 1 },
        { name: "анималисты", value: 0 },
        { name: "маринисты", value: 0 },
      ],
    },
    {
      type: "list",
      name: "question 3",
      message: "Сколько мишек изображено на картине «Утро в сосновом лесу»? ",
      choices: [
        { name: "два", value: 0 },
        { name: "три", value: 0 },
        { name: "четыре", value: 1 },
      ],
    },
    {
      type: "list",
      name: "question 4",
      message: "Как называются чёрные, белые и серые цвета?",
      choices: [
        { name: "хроматические", value: 0 },
        { name: "ахроматические", value: 1 },
        { name: "хромые", value: 0 },
      ],
    },
    {
      type: "list",
      name: "question 5",
      message: "Каким даром обладал французский художник В.Ван Гог? ",
      choices: [
        { name: "видел воздушные потоки", value: 1 },
        { name: "турбулентность", value: 0 },
        { name: "Леонора каррингтон", value: 0 },
      ],
    },
  ])
  .then((answers) =>
    console.log(
      `Ваше количество очков за Art Quiz: ${Object.values(answers).reduce(
        (acc, item) => acc + item
      )}/${Object.values(answers).length}`
    )
  );
