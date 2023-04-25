// Задание 5:

const arrFirst = [2,'four',8,'sixteen',32,64,true,256];
console.log(arrFirst.length);


let random = arrFirst.map(function(item, index, arr){
  return item});
console.log(random);


arrFirst.forEach(function(item, index, array) { 
console.log(item)
})