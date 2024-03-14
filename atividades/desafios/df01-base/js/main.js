/* 
Um carrinho de compras contém uma lista de items adicionados pelo cliente.
Ao proceder para o checkout, o sistema deve informar ao usuário o valor total da compra, já com descontos e frete aplicados.
Dado o código base abaixo, implemente uma função para calcular o preço total da compra dos items no carrinho.
A resoluação deve envolver pelo menos um recurso estudado em aula sobre o ES6+.
*/

const carrinho = [
  {
    id: 1,
    nome: "Livro: JavaScript: O Guia Definitivo",
    urlImg: "https://m.media-amazon.com/images/I/91z1xY4ppaL._SL1500_.jpg",
    preco: 205.8,
    qtd: 1,
  },
  {
    id: 2,
    nome: "Echo Pop | Smart speaker",
    urlImg: "https://m.media-amazon.com/images/I/71eWKwcVjnL._AC_SL1500_.jpg",
    preco: 242.1,
    qtd: 1,
  },
  {
    id: 3,
    nome: "Fire TV Stick Lite",
    urlImg: "https://m.media-amazon.com/images/I/41XUvigLn0L._AC_SL1000_.jpg",
    preco: 224.1,
    qtd: 1,
  },
];

let desconto = 0.1;
let frete = 120;
