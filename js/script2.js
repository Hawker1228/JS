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

// Область математики, в которой изучаются логические операторы, называется булевой алгеброй.
// И &&
/*
A	     B	   A && B
TRUE	TRUE	TRUE
TRUE	FALSE	FALSE
FALSE	TRUE	FALSE
FALSE	FALSE	FALSE
*/
// true && true;
// 3 > 2 && 'wow'.startsWith('w'); // true

// true && false;
// 'start' === 'start' && 8 < 3; // false
/*
ИЛИ ||
A	     B	   A || B
TRUE	TRUE	TRUE
TRUE	FALSE	TRUE
FALSE	TRUE	TRUE
FALSE	FALSE	FALSE
*/
// ПОКАЗАТЬ ВЕСОКОСНЫЙ ГОД ИЛИ НЕТ
const isLeapYear = (year) => {
  var numb = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return numb;
}
console.log(isLeapYear(2016));
console.log(true || 'yes');

//ВЫВЕСТИ БУКВУ ПО НОМЕРУ ИЛИ ПУСТУЮ СТРОКУ
const text55 = 'Hexlet';
const getLetter = (text,numb) => {
  var result = text[numb-1];
  if (result === undefined)
  {
    result = '';
  }
  else {
    result = result;
  }
  return result;
}
// console.log(getLetter(text55,0));

// ПРОВЕРКА ТИПА ПРЕДЛОЖЕНИЯ
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;
  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }
  return `Sentence is ${sentenceType}`;
};
getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   //  Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation

// ЕСЛИ НЕТ HTTPS ТО ДОПИСЫВАТЬ
  const normalizeUrl = (url) => {
  var url_begin = url.startsWith('https://',0);
  if(url_begin === false) {
    var change_url = "https://" + url;
    return change_url;
  }
  return url;
}
console.log(normalizeUrl("https://google.com"));


// ТЕРНАРНЫЙ ОПЕРАТОР!!!
const abs = (number) => {
  return number >= 0 ? number : -number;
};
// СОКРАЩЕНИЕ 
const abs1 = (number) => (number >= 0 ? number : -number);

// Было:
const getTypeOfSentence1 = (sentence) => {
  const lastChar = sentence.slice(-1);
  if (lastChar === '?') {
      return 'question';
  }
  return 'normal';
};

// Стало:
const getTypeOfSentence2 = (sentence) => {
  const lastChar = sentence.slice(-1);
  return (lastChar === '?') ? 'question' : 'normal';
};
getTypeOfSentence('Hodor');  // normal
getTypeOfSentence('Hodor?'); // question


// ФУНКЦИЯ КОНВЕРТ ТЕКСТ
const convertText = (str) => {
  if(str === "") {
    return str;
  }
  else if(str[0] !== str[0].toUpperCase()){
    const str_len = str.length;
    var arr = "";
    for(let i = str_len-1; i >= 0; i--){
     arr += str[i];
      }
    return arr;
  }
  return str;
}
console.log(convertText('hellou'));

// 
const statusStr = (str) => {
  switch (str) {
    case 'process':
      break;
    case 'paid':
      break;
    case 'new':
      break;
    default:
      str ='Нет значений из списка';
      return str;
  }
  return str;
}
console.log('Значение = ' + statusStr('paid'));

// СРАВНЕНИЕ СТРОКИ С НАБОРОМ ИЗ МАССИВА
const statusStrOfArr = (str) => {
  var arr = ["Hello","say","buy","World","Friend"];
  for(i= 0; i < arr.length-1; i++){
    var stringOfArr = arr[i];
    if(str === stringOfArr) {
      var mess = 'Такое значение есть = ' + arr[i];
      return mess;
    }
  }
  console.log(arr);
  mess = 'Нет такого';
  return mess;
}
console.log(statusStrOfArr('World'));

// принимает на вход число и возвращает объяснение этого числа.
const getNumberExplanation = (num) => {
  var strOpisanie = '';
  switch (num) {
    case 666 : 
    strOpisanie = 'devil number';
    break;
    case 42 : 
    strOpisanie = 'answer for everything';
    break;
    case 7 : 
    strOpisanie = 'prime number';
    break;
    default:
      strOpisanie = 'just number';
  }
  return strOpisanie;
}
console.log(getNumberExplanation(7));

//ПРИМЕР ЦИКЛА WHILE!!!
const pritnNumbers = (lastNumber) => {
  let i = lastNumber;
  while (i >= 1){
    console.log(i);
    i = i-1;
  }
  console.log("Finished");
};
pritnNumbers(4);

// ВЫВОД БУКВ ОТ первой до Определенной
const mySubstr = (str,length) => {
  let i = 0;
  let result = '';
  while (i <= str.length-1) {
    result += str[i];
    i = i+1;
    if (i === length) break;
  }
  return result;
}
console.log(mySubstr('got',3));

// Считает, сколько раз входит буква в предложение. 
const countChars = (str, char) => {
  let i = 0;
  let count = 0; // Кол-во букв
  let str_up =str.toUpperCase();
  let char_up = char.toUpperCase();
  while (i< str_up.length) {
    if (str_up[i] === char_up) { // Еслии индекс символа равен букве поиска
      count = count + 1; // прибавляем +1 к результату
    }
    i = i + 1; // Увеличиваем счетчик
  }
  return ('Символов "'  + char_up + '" кол-во ' + count);
};
console.log(countChars('Fear cuts deeper than swords.','E'));

// МЕНЯТЬ РЕГИСТР КАЖДОЙ n-ой Буквы
const makeItFunny = (text,num) => {
  let i = 0;
  let result = '';
  let len = text.length;
  for (let i=0; i<len; i++){
    if ((i + 1) % num === 0) {
      result += text[i].toUpperCase();
    }
    else {
      result += text[i];
    }
  }
  return result;
}
console.log(makeItFunny('I never look back',3));

// ПЕЕРЕВОРОТ СТРОКИ ЧЕРЕЗ  FOR
const reverseString = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }
  return result;
};

// ШИФРОВАНИЕ СТРОКИ
const encrypt = (text) => { // функция: надо перевернуть каждые два символа из текста
  let result = ''; // нейтральная пустая строка
  for (let i = 0; i < text.length; i+= 2) { // движение по циклу от 0, пока не дойдём до конца массива, с шагом в 2 символа
    result = `${result}${text[i + 1] !== undefined ? text[i + 1] : ''}${text[i]}`;
                        // если: текст в квадратных скобках первый символ плюс второй символ
                        // не равен неопределенному значению
                        // вернуть: текст в квадратных скобках первый символ плюс второй символ
                        // иначе: вернуть пустую строку
                        // добавим первый символ из текста 
  }

  return result;
};
console.log(encrypt("move")); 

// ПОСЛЕДНЕЕ ЗАДАНИЕ КУРСА HEXLET
const getTriangleArea = (h,b) => { 
  let a = 0.5;
  let plosh = ((a * h) *b);
  return plosh;
  }
  console.log(getTriangleArea(15,12)); 
  const finalFunc = (n) => {
    let result = getTriangleArea(n,Math.pow(n,2)/2);
    return result;
  }
  console.log(finalFunc(4));

