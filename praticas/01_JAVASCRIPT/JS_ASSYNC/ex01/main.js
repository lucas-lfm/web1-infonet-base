// setInterval(imprimirData, 1000);

// function imprimirData() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + 
//         d.getMinutes() + ":" + 
//         d.getSeconds());
// }

// setTimeout(() => {
//     console.log("Executou a setTimeout!");
// }, 3000);

function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a+b);
        }, 3000);
    })
}

async function soma(a, b, c, d){
    let x = somaComDelay(a, b);
    let y = somaComDelay(c, d);

    console.log(await x);
    console.log(await y);
}

soma(10, 5, 5, 2);