let money = prompt("Ваш бюджет на месяц?");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);
let dopmoney = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");

let appData = {
    money,
    timeData: time,
    expenses: {
        dopmoney , howMuch
    } ,
    optionalExpenses :{

    },
    savings: false,
    income : [],
};
console.log(appData);
alert(money/30);