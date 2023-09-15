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

// dadagagdfgjpspgls12412!@#$%^&*()
function string_2() {
 let text_vivod = document.getElementById('text1');

    const s = "*!!??:";
    const num_char = /[^a-zа-яA-ZА-Я0-9]+/g;
    const char = /[^a-zа-яA-ZА-Я]+/g;
    const num = /[^0-9]+/g;
    const musor = /[^!-\/:-@[-`{-~]/gm;
    
    // console.log('Ваш набор данных - \n' + s);
    let musor_sort = s.replace(musor, "")
    console.log('Мусор - ' + musor_sort);

let len = musor_sort.length
let arr1 = [];

    for(let i=0; i < len; i++){
        arr1.push(musor_sort[i]);
        // console.log(arr1[i] + " " +  arr1[i] / len*100);
    }

var sum_sim = {};
    arr1.forEach(function(a){
        if (sum_sim[a] != undefined)
            ++sum_sim[a];
        else
        sum_sim[a] = 1;
    });
    for (var key in sum_sim) {
    document.write('Символ ' + key + ' == ' + (sum_sim[key] / len*100).toFixed(1) + ' %'+ "\r");    
    }
 
}
string_2();   