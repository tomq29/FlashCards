const inquirer = require('inquirer');
const idioms = inquirer.default.prompt([
 
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
        message: 'Как переводится данная идиома?\n  Идиома: "Hit the nail on the head" ',
        choices: [
        { name: 'Ударить гвоздь по голове', value: 0 },
        { name: 'Попасть в яблочко', value: 1 },
        { name: 'Огрести неприятности', value: 0 },
        ],
    },
    {
        type: 'list',
        name: 'question 3',
        message: 'Как переводится данная идиома?\n  Идиома: "Let the cat out of the bag" ',
        choices: [
        { name: 'Выпустить кошку из мешка', value: 0 },
        { name: 'Пустить в ход обман', value: 0 },
        { name: 'Рассказать секрет', value: 1 },
        ],
    },
    {
        type: 'list',
        name: 'question 4',
        message: 'Как переводится данная идиома?\n  Идиома: "Cost an arm and a leg" ',
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
    
])

 .then((answers) => console.log(`Ваше количество очков за Idiom Quiz: ${Object.values(answers).reduce((acc, item) => acc+item)}/${Object.values(answers).length}`))