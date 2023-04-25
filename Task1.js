// Задание 1:

let example = +prompt('Введите число');

if (typeof example === 'number' && !isNaN(example)) {
    if (example % 2 == 0) {
        console.log('Чётное число')
    }
    else {
        console.log('Нечётное число')
    }
}

    else {
    console.log('Упс! Кажется, Вы ошиблись!')
}



