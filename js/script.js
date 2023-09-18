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

let dollarsCount = 50 * 1.25;
const dollar =  document.getElementById("var_txt");
let dollar_p = dollar.appendChild(document.createElement("p")).innerText='Huy';

console.log(dollarsCount);

