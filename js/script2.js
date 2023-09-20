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
const string_2 = 'Robb353233';
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
var bukva = '3';
var schet = 0;
for(i = 0; i < n_arr.length; i++){
    var ind = n_arr[i];
    if(ind === bukva){

        schet += 1;   
    }
}
console.log('Есть значение =  <' + ind + '> количество = ' + schet);


