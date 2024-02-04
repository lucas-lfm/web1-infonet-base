let x = 10;
let y = "15";

// o operador + (soma) aqui se comporta como um operador de concatenação de strings
// o valor da variável x, nesse caso, é convertido para string
let z = x + y;
console.log(z);
console.log(typeof z);

// já aqui, o operador - (subtração) realiza a operação aritmética de subtração
// a variável y é então convertida para number
z = x - y;
console.log(z);
console.log(typeof z);

// CONDICIONAIS

let imc = Number(prompt("Informe seu IMC"));

// <= 18.5 : abaixo do normal
// < 25 : peso ideal
// < 30 : sobrepeso
// >= 30 : obesidade

// quando precisamos testar mais de uma condição relacionadas, usamos a estrutura else if
if (imc <= 18.5) {
    console.log("Seu peso está abaixo do normal, camarada!");
} else if (imc < 25) {
    console.log("Você está no seu peso ideal, camarada!");
} else if (imc < 30) {
    console.log("Você está em nível de sobrepeso, camarada!");
} else {
    console.log("Você está em nível de obesidade, camarada!");
}

// switch - case
// a estrutura switch é utilizada quando precisamos verificar o valor de uma variável (experssão)
// nessa situação, temos casos bem definidos de valores exatos para comparar com a variável
// perceba, neste exemplo, que para cada situação a ser verificada (valor a ser comparado), existe um case
// além disso, ao final, temos o case default (quando não entra em nenhum outro case)

switch (new Date().getMonth()) { // new Date().getMonth() retorna o mês atual
    case 0:
        console.log("O mês atual é Janeiro!");
        break; // o break é utilizado para parar a verificação dos cases, quando algum case é selecionado
    case 1:
        console.log("O mês atual é Fevereiro!");
        break;
    case 2:
        console.log("O mês atual é Março!");
        break;
    case 3:
        console.log("O mês atual é Abril!");
        break;
    case 4:
        console.log("O mês atual é Maio!");
        break;
    case 5:
        console.log("O mês atual é Junho!");
        break;
    case 6:
        console.log("O mês atual é Julho!");
        break;
    case 7:
        console.log("O mês atual é Agosto!");
        break;
    case 8:
        console.log("O mês atual é Setembro!");
        break;
    case 9:
        console.log("O mês atual é Outubro!");
        break;
    case 10:
        console.log("O mês atual é Novembro!");
        break;
    case 11:
        console.log("O mês atual é Dezembro!");
        break;
    default:
        console.log("Erro ao verificar o mês!");
}