// СИНТАКСИС - str.replace(regexp|substr, newSubStr|function[, flags])
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace

function replacer(match, p1, p2, p3, offset, string) {
   // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
   return [p1, p2, p3].join(" - ");
}
var newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

var str = "+(48) 123-456-789".replace(/[-+()\s]/g, '');  // result: "48123456789"

// Замена яблок на апельсины
var re = /яблоки/gi;
var str2 = "Яблоки круглые и яблоки сочные.";
var newstr2 = str2.replace(re, "апельсины");
console.log(newstr2); // апельсины круглые и апельсины сочные.

// Ночь перед Рождеством, Xmas - сокращение для Christmas
var str3 = "Twas the night before Xmas...";
var newstr3 = str3.replace(/xmas/i, "Christmas");
console.log(newstr3); // Twas the night before Christmas...

// Пример: смена местами слов в строке
var re2 = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
var str4 = "Джон Смит";
var newstr4 = str4.replace(re, "$2, $1");
console.log(newstr4); // Смит, Джон

// Пример: замена градусов по Фаренгейту на эквивалент в градусах по Цельсию
function f2c(x) {
    function convert(str, p1, offset, s) {
      return ((p1 - 32) * 5) / 9 + "C";
    }
    var s = String(x);
    var test = /(\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
  }

// Пример: использование функции вместе с регулярным выражением для избавления от цикла for
var str = "x-x_";
var retArr = [];
str.replace(/(x_*)|(-)/g, function (match, p1, p2) {
  if (p1) {
    retArr.push({ on: true, length: p1.length });
  }
  if (p2) {
    retArr.push({ on: false, length: 1 });
  }
});
console.log(retArr);
/* ВЫВОД [
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
] */