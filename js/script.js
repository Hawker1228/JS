function getTextLength(str) {
    return [...str].length;
}

// console.log('3 + 4 =', 3 + 4);
// console.log((8 / 4) - (8 + (2 - 1)) + 7 * 2);
// console.log(3 ** 5);
// console.log(-8 / -4);
// console.log(100 % 3);
// console.log(3 ** 5 + (-8 / -4) + (100 % 3));
// console.log("\\ \\ \\\\ \\\ \'\"");

// const s = prompt("");
// function string_1() {
//     const s = "dadagagdfgjpspgls12412!@#$%^&*()";
//     const num_char = /[^a-zа-я0-9]+/g;
//     const char = /[^a-zа-я]+/g;
//     const num = /[^0-9]+/g;
//     const musor = /[^!-\/:-@[-`{-~]/gm;
    
//     console.log('Ваш набор данных - \n' + s);

//     console.log('Мусор - ' + s.replace(musor, ""));
    
//     console.log('Буквы и цифры - ' + s.replace(num_char, ""));
    
//     console.log('Только буквы - ' + s.replace(char, ""));
    
//     let numbers = Number(s.replace(num, "").length);
//     console.log('Только цифры - ' + s.replace(num, ""));
    
//     console.log('Количество цифр в строке - ' + numbers);
    

    
//     console.log("Процент * - " + (sim1));
//     console.log("Процент # - " + (s.split('#').length -1));
//     console.log("Процент & - " + (s.split('&').length -1));
//     console.log("Процент ! - " + (s.split('!').length -1));
//     console.log("Процент @ - " + (s.split('@').length -1));
//     console.log("Процент $ - " + (s.split('$').length -1));
//     console.log("Количество % - " + (s.split('%').length -1));
//     console.log("Количество ^ - " + (s.split('^').length -1));
//     console.log("Количество ( - " + (s.split('(').length -1));
//     console.log("Количество ) - " + (s.split(')').length -1));
//     console.log("Количество - - " + (s.split('-').length -1));
//     console.log("Количество + - " + (s.split('+').length -1));
// }
// string_1();

// dadagagdfgjpspgls12412!@#$%^&*() все символы по 10%
function string_2() {
    let text_vivod = document.getElementById('text1');

    const s = "dadagagdfgjpspgls12412!@#$%^&*()";
    const num_char = /[^a-zа-яA-ZА-Я0-9]+/g;
    const char = /[^a-zа-яA-ZА-Я]+/g;
    const num = /[^0-9]+/g;
    const musor = /[^!-\/№:-@[-`{-~]/gm;
    
    let musor_sort = s.replace(musor, "") //Делаю выборку по знакам
    console.log('Мусор - ' + musor_sort); //отображаю их все в консоль
    let len = musor_sort.length //Получаем количество всех символов
    let arr1 = [];

    for(let i=0; i < len; i++){
        arr1.push(musor_sort[i]); //Заполняю  массив arr1
    }
    console.log(arr1);
  
    var sum_sim = []; //Создаю промежуточный массив для перебора  
    console.log(sum_sim);

        arr1.forEach(function(a){ //Проходим по массиву arr1
            if (sum_sim[a] != undefined)
              ++sum_sim[a];  // Заполняем уникальными символами
            else
            sum_sim[a] = 1;  // Считаем каждый +1
            });
         console.log(sum_sim);

    var sum_key = 0;
    for (var key in sum_sim) {
            var doc_txt = ('Символ ' + key + ' == '); 
            var doc_p =  text_vivod.appendChild(document.createElement("p"));
            doc_p.textContent = doc_txt;
            var doc_a = doc_p.appendChild(document.createElement("a")).textContent=((sum_sim[key] / len*100).toFixed(1) + '%');
            var h_txt = key.length;
            sum_key += h_txt;
        }
        console.log(sum_key);
        
        text_vivod.style.height+=(sum_key*35)+"px";
}


const text_test1 =  document.getElementById("var_txt");
let text32 = text_test1.appendChild(document.createElement("p")).innerText='Huy';

var add_itm = document.getElementById('main_div');
var elem1 = document.createElement('div');
console.log(elem1,add_itm);
add_itm.appendChild(elem1).className='variables';

// ВЫРАЖЖЕНИЯ
let rublesPerDollar = 60;
let dollarsCount = 50  * 1.25;
let rublesCount = dollarsCount * rublesPerDollar;
console.log('Thhe price is ' + rublesCount + ' rubles');

// Интерполяция
const firstName = 'Joffrey';
const greeting = 'Hello';

// Обратите внимание на ограничители строки, это бектики
// Интерполяция не работает с одинарными и двойными кавычками
console.log(`${greeting}, ${firstName}!`);
// Явное преобразование типов
const number = parseInt('345');
console.log(number); // => 345
const value = '0';
// Внутри скобок можно указывать переменную
const number1 = parseInt(value);
console.log(number1); // => 0

// Или конкретное значение
const number2 = parseInt('10');
console.log(number2); // => 10

// Если преобразуется число с плавающей точкой
// то отбрасывается вся дробная часть
const number5 = parseInt(3.5);
console.log(number5); // => 3
const value3 = parseFloat('0.5');
console.log('This type of "' + typeof(value3) + '" ' + value3); // 0.5
let num = parseFloat(-0.304);
console.log(num);

let firstName1 = 'Alexander';
// Код выполнится без ошибок
firstName1[0] = 'B';
console.log(firstName1); // => Alexander но символ внутри не поменяется
// Слабая типизация
console.log(1 + '7'); // => 17
const result = 'one' * 'two';
console.log(result); // => NaN

// ФУНКЦИИ
const resultfunc = getTextLength('HELP');
console.log(resultfunc + ' ' + 'HELP'.length);


const strin = "The quick red fox jumped over the lazy dog's back.";

const iterator = strin[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}
console.log(Math.pow(2, 3)); // 8  Пример возведения в степень через ф-цию
const round = (number, precision = 0) => {
    return Math.round( number * Math.pow(10, precision)) / Math.pow(10, precision);
  };
const result3 = round(10.25, 1); // 10.3  фу-ция округления
console.log(result3); 
