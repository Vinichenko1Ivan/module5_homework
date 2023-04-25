// Задание 2:
// Первый вариант решения:

let x = 8;

switch(typeof x) {

  case 'number':
    console.log('x - число');
  break;

  case 'string':
    console.log('x - строка');
  break;
  
  case 'boolean':
    console.log('x - логический тип');
  break;
  
  default: 
  console.log('Тип не определён')

}


// Второй вариант:

/*let x = 5;                     

if (typeof x === 'number') {
  console.log('x - число')
}

else if (typeof x === 'string') {
  console.log('x - строка')
}

else if (typeof x === 'boolean') {
  console.log('x - логический тип')
}

else {
  console.log('x - тип не определён')
}*/