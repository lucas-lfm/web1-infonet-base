import { useParams } from "react-router-dom";
import "./Filme.css";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../components/Banner";

const URL_FETCH = "https://api.themoviedb.org/3/movie/";

const Filme = () => {
  const { id } = useParams();
  const { dados: filme } = useFetch(`${URL_FETCH}${id}?language=pt-BR`);

  console.log(filme);

  return (
    <div id='filme'>
      {filme && (
        <div className='backdrop'>
          <Banner title={filme.title} backdropPath={filme.backdrop_path} />
        </div>
      )}
    </div>
  );
};

export default Filme;
