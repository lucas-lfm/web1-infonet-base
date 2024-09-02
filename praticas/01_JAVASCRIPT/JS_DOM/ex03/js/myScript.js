const clients = ["Bruno Sousa", "Maria Beatriz", "João Paulo"];

let txt = "";
clients.forEach((value) => {
  txt += `<li>${value}</li>`;
});

let listClient = document.querySelector(".client-list");
listClient.innerHTML = txt;
