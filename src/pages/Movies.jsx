import { useContext } from "react";
import { CiShare1 } from "react-icons/ci";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import GIF from "../Components/GIF/GIF";
import Title from "../Components/Title/Title";
import AppData from "../Context/ApiData";
import gif from "../assets/gifs/films_gif.gif";

const Movies = () => {
  const {
    movies,
    moviesPage,
    setMoviesPage,
    moviesLoading,
    setMoviesLoading,
    setSelectedMovie,
  } = useContext(AppData);
  const navigate = useNavigate();


  const goToMovieId = (movie, url) => {
    setSelectedMovie(movie);
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    navigate(`/movies/${id}`);
  };

  const nextPage = () => {
    setMoviesLoading(true);
    setMoviesPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (moviesPage <= 1) {
      return;
    } else {
      setMoviesLoading(true);
      setMoviesPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <GIF url="/" src={gif} />
      {moviesLoading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="p-4 pb-16 sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
          <Title className="underline" color="white">
            Movies
          </Title>
          <div className="flex flex-col gap-2 mt-5 xl:grid xl:grid-rows-5 xl:grid-flow-col xl:gap-4">
            {movies?.results?.map((movie, index) => (
              <span
                key={index}
                className="flex justify-between items-center text-white font-light tracking-widest bg-[#1f1f1f] px-4 py-3 "
              >
                {movie.title || "No results were found"}
                <CiShare1
                  onClick={() => goToMovieId(movie, movie?.url)}
                  size={20}
                  color="white"
                />
              </span>
            ))}
          </div>
          <div className="mt-5 flex justify-center items-center gap-10 bg-[#1f1f1f] py-2 text-white">
            {movies?.count < 10 ? null : (
              <button onClick={prevPage}>
                <MdNavigateBefore color="#FFE81F" size={30} />
              </button>
            )}
            {moviesPage}
            {movies?.count < 10 ? null : (
              <button onClick={nextPage}>
                <MdNavigateNext color="#FFE81F" size={30} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
