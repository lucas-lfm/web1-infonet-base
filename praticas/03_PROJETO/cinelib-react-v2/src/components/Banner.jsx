import "./Banner.css";

const URL_IMG_BASE = "https://image.tmdb.org/t/p/original";

const Banner = ({ title, backdropPath }) => {
  return (
    <>
      <img className="banner-img" src={`${URL_IMG_BASE}${backdropPath}`} alt='' />
      <div className='banner-title'>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Banner;
