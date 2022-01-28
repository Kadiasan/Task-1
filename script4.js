const souvenirWeight = 75;
const trinketWeight = 112;

let souvenir = Number(prompt("Введите кол-во сувениров"));
let trinket = Number(prompt("Введите кол-во бездлушек"));

let totalWeight = souvenir * souvenirWeight + (trinket * trinketWeight);

document.write(`Общий вес составляет: ${totalWeight}г. `);