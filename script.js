﻿const money = prompt(`Ваш бюджет на месяц?`, ``);
const time = prompt(`Введите дату в формате YYYY-MM-DD`, ``);
//Here you are

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
}



for (let i = 0; i < 2; i++) {
    let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``),
        b = prompt(`Во сколько обойдется?`, ``);

    if ((a !== '' && a !== null && a.length < 50) && (b !== '' && b !== null && b.length < 50)) {
        appData.expenses[a] = b;
    } else i--;

};

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет ${appData.moneyPerDay}`);