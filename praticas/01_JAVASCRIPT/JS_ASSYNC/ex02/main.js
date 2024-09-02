// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2YzOGQyMTYxY2E5ZmU5MGU0ODE4ODY5NTU0N2I2MiIsIm5iZiI6MTcyMjU0Mjk1NC4wMTI3MzIsInN1YiI6IjY2NjIwNTQ5ZjkxZDUxYzgwMTdlN2IwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5PBBdy0kohMU3MSU6HRmIyyB6vBF6xIx1aWTmZvSeLU'
//     }
//   };
  
//   fetch('https://api.themovied.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.error(err));

function somaComDelay(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  })
}

async function soma(a, b, c, d) {
  let x = somaComDelay(a, b);
  let y = somaComDelay(c, d);

  return await x + await y;
}

soma(8, 5, 3, 2).then(resultado => console.log(resultado));



