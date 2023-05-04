// Задание 8:

// Первый вариант: 
 
let animalsMap = new Map ([

['fox', ' ginger'],
['wolf', ' grey' ],
['bear', ' brown'],
['flamingo', ' pink' ]

]);

for (let [key, value] of animalsMap) {
  console.log(`ключ - ${key}, значение - ${value}`)
}

// Второй вариант:

let someMap = new Map ();
someMap.set('red', 1);
someMap.set('orange', 2);
someMap.set('yellow', 3);
someMap.set('green', 4);
someMap.set('bright-blue', 5);
someMap.set('dark-blue', 6);
someMap.set('violet', 7);

for (let [key, value] of someMap) {
  console.log(`ключ - ${key}, значение - ${value}`)
}
