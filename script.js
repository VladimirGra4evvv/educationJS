/*  
confirm - вывод модального окна
prompt - модальное окно для ввода значений


*/

'use strict';

let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;
let str = 'Hello my Friends!';
let myArray;
let budgetDay;
let requiredExpenses1;
let requiredExpenses2;
let howMuch1;
let howMuch2;
let budgetMonth;

mission = 460000;

/*money = 98000;
income = 'фриланс';
addExpenses = 'Дети, Коммуналка, Спорт';
deposit = true;

period = 6;


// alert(money);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(income.length);
console.log('Заработать за ' + period + ' мес' + ' - ' + mission + ( ' руб'));

addExpenses = addExpenses.toLowerCase();
myArray = addExpenses.split(',');
console.log(myArray);

budgetDay = money/30;

console.log('Бюджет в день ' + budgetDay.toFixed(2));
*/


money = Number(prompt('Ваш месячный доход?', 0));

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = prompt('Есть ли у вас депозит в банке?');
if(deposit === 'да'){
    deposit = true;
} else {
    deposit = false;
}

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

requiredExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
howMuch1 = Number(prompt('Во сколько вам это обходится?'));
requiredExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
howMuch2 = Number(prompt('Во сколько вам это обходится?'));

budgetMonth = money - (howMuch1 + howMuch2);
console.log(budgetMonth);

mission = mission/budgetMonth;
console.log('Цель будет достигнута за: ' + mission.toFixed(0) + ' мес');