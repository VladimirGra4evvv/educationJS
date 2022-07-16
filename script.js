let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;
let str = 'Hello my Friends!';
let myArray;
let budgetDay;

money = 98000;
income = 'фриланс';
addExpenses = 'Дети, Коммуналка, Спорт';
deposit = true;
mission = 460000;
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