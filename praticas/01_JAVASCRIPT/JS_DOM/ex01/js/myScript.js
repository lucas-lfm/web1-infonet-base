let btn = document.querySelector("#btn");

// function alterarParagrafo() {
//     let parag = document.getElementById("parag");
//     parag.innerHTML = "Parágrafo Modificado.";
// }

const alterarParagrafo = () => {
  let parag = document.getElementById("parag");
  let divTest = document.querySelector(".escondida");
  parag.innerHTML = "Parágrafo Modificado.";
  divTest.style.visibility = "visible";
  divTest.style.backgroundColor = "red";
};

btn.addEventListener("click", alterarParagrafo);
