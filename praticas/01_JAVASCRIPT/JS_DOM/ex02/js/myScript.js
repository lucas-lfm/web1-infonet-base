let btn = document.querySelector("#btn");

let fullName = "Lucas Mendes";

const boasVindas = () => {
  let parag = document.querySelector("#p1");
  parag.innerHTML = `Olá ${fullName}, seja bem vindo!`;
};

btn.addEventListener("click", boasVindas);

// Olá Lucas Mendes, seja bem vindo!
