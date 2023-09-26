var min_num = Math.min(3,10,22,-3,0);
console.log(min_num);

var random_num = Math.floor(Math.random()*11);
console.log(random_num);

//МЕТОД ПЕРЕВОРОТ СТРОКИ ЗАДОМ НАПЕРЕД
const string = 'Robb';
const str_len = string.length;
var arr = "";
console.log(str_len);
for(let i = str_len-1; i >= 0; i--){
     arr += string[i];
}
console.log(arr);


//ПЕРЕНОС ТЕКСТА В МАССИВ
const string_2 = 'Robb353к23а3с';
function str_to_arr(str) {
    const str_len = str.length;
    var arr = [];
    for(let i = 0; i < str_len; i++){
        arr.push(str[i]);
    }
    return arr;
}
let n_arr = str_to_arr(string_2);
console.log(n_arr);

// ПОИСК БУКВЫ В МАССИВЕ #1
  function find_txt(where,txt) {
    return where === txt;
  }
  if((find_txt(n_arr[0],'R'))===true){
    console.log('Значение найдена ');
  }


// ПОИСК БУКВЫ В МАССИВЕ #2
var value = 'b';
var count = 0;
for(i = 0; i < n_arr.length; i++){
    var ind = n_arr[i];
    if(value === ind){
      count += 1;   
    }
}
console.log('Значение = '  + value + ' количество = ' + count);

// ЗАПИСЬ ФУНКЦИЙ В ПЕРЕМЕННЫЕ
var plus = function sum(att,att2){return att+att2};
var minus = function minus(att,att2){return att-att2};
console.log(minus(5,2));
console.log(plus(5,2));

// ПОИСК БУКВ ИЛИ ЦИФР В МАССИВЕ 
function find_value(arr,value){
  var count = 0;
  var val;
  for(let i = 0; i < arr.length; i++){
    var ind = n_arr[i];
    if((value === parseInt(ind)) || (value.toUpperCase() === ind.toUpperCase())){  // ПРИВЕЛ БУКВЕННЫЕ ДАННЫЕ В ОБЩИЙ ВЕРХНИЙ РЕГИСТР
      count+=1;
    }
  }
  var res=('Найдено значение: "' + value + "\" " + 'Кол-во = ' + `${parseInt(count)}`);
  return res;
}
// console.log(find_value(n_arr,val = prompt()));

//УБИРАЕМ ПРОБЕЛЫ и "\n" с помощью .trim() 
let firstName = '  Grigor   \n';
let name_r = firstName.trim();
console.log(firstName=name_r);
// ЦЕПОЧКА ВЫЗОВОВ 
const nameT = 'Tirion';
console.log(nameT.length.toString());
console.log(nameT.toUpperCase().toLowerCase().length.toString().length);
const number = 123;
console.log(typeof number.toString());
//.slice() ПОЛУЧАЕМ ЧАСТЬ ПРЕДЛОЖЕНИЯ  .replace() ЗАМЕНЯЕМ НУЖНОЕ СЛСВО
const text53 = 'When you play a game of thrones you win or you die.';
var text32 = text53.slice(5,13).replace('you','someone');
console.log(text32);

// СОЗДАЕМ ФУНКЦИЮ
const showGretting = () => {
  const text = 'Hello, Hexlet';
  console.log(text);
};
showGretting();

// ФУНКЦИЯ ПРОВЕРКИ ВВОДА ПОЧТЫ И АВТО_УБОРКА ПРОБЕЛОВ ВНУТРИ И СНАРУЖИ
const saveEmail = () => {
  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // Фильтруем по знакам
  var email = prompt().trim().replace(/[\s]/g,""); // СРАЗУ УБИРАЕМ ПРОБЕЛЫ
  const trinnedEmail = email.replace(EMAIL_REGEXP, "-"); // С ПОМОЩЬЮ РЕГУЛЯРКИ ЗАДАЕМ МАСКУ
  if(email === trinnedEmail) { // ЕСЛИ НАШ ВВОД НЕ СООТВЕТСВУЕТ МАСКЕ ТО ВЫДАЕМ СООБЩЕНИЕ
    console.log('Не правильно ввели ваш Email = ' + trinnedEmail);
  }
  else if (email != trinnedEmail){ // ЕСЛИ МАСКА ВЕРНАЯ ТО УБИРАЕМ ЕЩЕ РАЗ ПРОБЕЛЫ И ВЫВОДИМ
    var preparedEmail = email.trim().toLowerCase();
    console.log('Правильно = ' + preparedEmail);
  }
};
// saveEmail();

// ОБРЕЗАКА ТЕКСТА И ПОДСТАНОВКА ТОЧЕК ВМЕСТО БУКВ
const truncate = (text, length) => {
  // BEGIN (write your solution here)
  const word = text;
  const ind = length;
  const result = word.slice(word, ind);
  // END
  return (result + '...');
};
console.log(truncate('HEllo',2));

// СКРЫТИЕ НОМЕРА КАРТЫ
const getHiddenCard = (text, num = 4) => {
  const txt_num = '*'.repeat(num);
  const result = text.slice(12, 16);
  return (txt_num + result);
}
console.log(getHiddenCard('1234567812345678'));

// ПЕРВУЮ БУКВУ СДЕЛАТЬ БОЛЬШОЙ
const capitalize = (text) => {
  var result = text.slice(0,1).toUpperCase() + text.slice(1,text.length);;
  return result;
}
console.log(capitalize('anna'));

// ФУНКЦИИ ПРЕДИКАТЫ
const isInfant = (age) => {
  if(age <= 1) {
    console.log('Это младенец (' + age + ') лет');
  }
  else {
    console.log('Это уже не младенец (' + age + ') лет');
  }
}
isInfant(0.5,1);

// Напишем функцию проверки четности:
const isEven = (num) => {
  if(num%2===0){
    return (num + ' Четное');
  }
  else {
    return (num + ' Не четное');
  }
}
console.log(isEven(2));

// ПРОВЕРКА БОЛЬШАЯ ЛИ ПЕРВАЯ БУКВА
const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() === firstLetter;
};
console.log(isFirstLetterInUpperCase('marmont')); // false
console.log(isFirstLetterInUpperCase('Robb'));    // true

// ПРОВЕРКА
const isInternationalPhone =  (phon_num) => {
  const firstLetter = (phon_num[0]==='+');
  return firstLetter;
}
console.log(isInternationalPhone('+89602223423'));
