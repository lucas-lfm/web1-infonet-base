// Fundamentos básicos: variáveis, operadores e tipos de dados

// number
let a, b, c;
a = 5;
b = 10;
c = a + b;

console.log(c);
// o typeof é um operador que retorna o tipo de dados de um operando
console.log(typeof c);

let x;
x = c / 2;
console.log(x);
console.log(typeof x);

// string
let pNome = "Lucas";
console.log(pNome);
console.log(typeof pNome);

let uNome = "Mendes";
console.log(uNome);
console.log(typeof uNome);

// boolean
let trabalha = true;
console.log(trabalha);
console.log(typeof trabalha);

// uso de const na declaração de variáveis
const mNome = "Ferreira";
console.log(mNome);
console.log(typeof mNome);

// variáveis declaradas com conts tem sua referência constanta, não podem ser alteradas
pNome = "José";
console.log(pNome);

// mNome = "Alves";
// console.log(mNome);

// o JavaScript tem tipagem dinâmica e é possível alterar o tipo de dado atribuído a uma variável
uNome = 35;
console.log(typeof uNome);

// o operador + entre strings ou uma string e um número, resulta em uma string concatenada (junta strings)
let texto = "10";
let numero = 5;

let resultado1 = texto + numero;
console.log(resultado1);

// o operador - entre uma string e um número, resulta em um número (resultado de uma operação de subtração)
let resultado2 = texto - numero;
console.log(resultado2);