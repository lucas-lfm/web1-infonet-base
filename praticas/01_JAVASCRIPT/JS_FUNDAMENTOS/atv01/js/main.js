let n1;
let n2;

let qtdImpares = 0;
let somaImpares = 0;

while (qtdImpares < 5) {
  n1 = parseInt(prompt("Informe o valor inicial do intervalo:"));
  n2 = parseInt(prompt("Informe o valor final do intervalo:"));

  for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) continue;

    qtdImpares++;
    somaImpares += i;

    if (qtdImpares === 5) break;
  }

  if (qtdImpares < 5) {
    alert(
      "Por favor, informe outro intervalo! Não foi possível encontrar 5 números ímpares no intervalo informado."
    );
    qtdImpares = 0;
    somaImpares = 0;
    continue;
  } else {
    alert(
      `A soma dos cinco primeiros números ímpares no intervalo informado é ${somaImpares}.`
    );
  }
}
