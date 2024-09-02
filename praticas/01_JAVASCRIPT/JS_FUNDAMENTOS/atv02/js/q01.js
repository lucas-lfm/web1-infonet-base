const realizarOperacao = function (n1, n2, op = "+") {
  let resultado = 0;

  switch (op) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "/":
      resultado = n1 / n2;
      break;
    case "*":
      resultado = n1 * n2;
      break;
    default:
      console.log("Operação inválida.");
      return false;
  }

  return resultado;
};

let resultado = realizarOperacao(10, 20, "^");
console.log(resultado);
