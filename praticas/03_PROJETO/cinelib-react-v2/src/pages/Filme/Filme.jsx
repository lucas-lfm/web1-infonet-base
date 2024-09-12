import { useParams } from "react-router-dom";
import "./Filme.css";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../components/Banner";
import Details from "../../components/Details";

const URL_FETCH = "https://api.themoviedb.org/3/movie/";

const Filme = () => {
  const { id } = useParams();
  const { dados: filme } = useFetch(`${URL_FETCH}${id}?language=pt-BR`);

  console.log(filme);

  return (
    <div id='filme'>
      {filme && (
        <>
          <Banner filme={filme} />
          <Details filme={filme} />
        </>
      )}
    </div>
  );
};

export default Filme;
