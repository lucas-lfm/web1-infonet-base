const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTIyMGU5MWJhNjlhOTNjYmY1YmQ1N2MyMDYxZjljMCIsIm5iZiI6MTcyMzE0MDE2OC4yMzY3ODEsInN1YiI6IjY2YWJlZDUzMWI2ZTIyNmMxMGExMzcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nfIwiYY0em29_GsRaaEPA03jb765B0R0u_lNmNBEwGw'
    }
};

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Júlio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let URL_IMAGES = "https://image.tmdb.org/t/p/w500";

const buscarFilmes = async () => {
    let filmes = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
                        .then(response => response.json());
    return filmes;
}

document.addEventListener("DOMContentLoaded", async () => {
    let containerFilmes = document.querySelector('#movies-container');

    let filmes = await buscarFilmes();

    console.log(filmes);

    filmes.results.map((result) => {
        let releaseDate = new Date(result.release_date);
        releaseDate = `${months[releaseDate.getMonth()]} de ${releaseDate.getFullYear()}`;
        let title = result.title;
        let imagePath = URL_IMAGES + result.poster_path;
        let voteAverage = result.vote_average;

        containerFilmes.innerHTML += 
        `<div class="movie-card">
            <img
                src="${imagePath}"
                alt="Divertida Mente 2"
            />
            <h2>${title}</h2>
            <p>
            <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
            </svg>
            ${voteAverage.toFixed(2)}
            </p>
            <a href="">Detalhes</a>
        </div>`;
    });
});

{/* <div class="movie-card">
    <img
        src="https://image.tmdb.org/t/p/original/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"
        alt="Divertida Mente 2"
    />
    <h2>Divertida Mente 2</h2>
    <p>
        <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 576 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
        ></path>
        </svg>
        7.6
    </p>
    <a href="">Detalhes</a>
</div> */}