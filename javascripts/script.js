'use strict';

//Работа с ипутами

//Чекбокс
/* const one = document.getElementById('one');

one.addEventListener('change', function(){
    if (one.checked){
        alert('Чек выбран');
    } else {
        alert('Чек не выбран');
    }
    }
); */

//радиобаттон
const one = document.getElementsByName('r1'),
      btn = document.getElementById('Validated');

btn.addEventListener('click', function(){
    for (let i = 0; i < one.length; i++){
    if (one[i].checked){
        alert('Выбран ' + i + ' элемент');
    }}
});

//Закончил урок 1 - Инпуты
