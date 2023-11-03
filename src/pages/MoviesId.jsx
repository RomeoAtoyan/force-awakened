import { useContext, useEffect } from "react";
import MovieCard from "../Components/Card/MovieCard";
import Crawl from "../Components/Crawl/Crawl";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import AppData from "../Context/ApiData";

const MoviesId = () => {
  const { selectedMovie, setSelectedMovie } = useContext(AppData);

  useEffect(() => {
    const storedSelectedMovie = localStorage.getItem("selectedMovie");
    if (storedSelectedMovie) {
      setSelectedMovie(JSON.parse(storedSelectedMovie));
    }
  }, [setSelectedMovie]);

  useEffect(() => {
    document.body.style.height = "90vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="max-h-screen ">
      <div className="h-10 sm:px-20 mt-2 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
        <GoBackButton url="/movies" />
      </div>
      <div className="relative p-4 sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
        <MovieCard
          title={selectedMovie?.title}
          date={selectedMovie?.release_date}
          director={selectedMovie?.director}
          producer={selectedMovie?.producer}
          characters={selectedMovie?.characters}
          species={selectedMovie?.species}
          planets={selectedMovie?.planets}
        />
        <div className="h-48 w-100 mt-5 relative bg-black overflow-hidden lg:h-80">
          <Crawl text={selectedMovie?.opening_crawl} />
        </div>
      </div>
    </div>
  );
};

export default MoviesId;
