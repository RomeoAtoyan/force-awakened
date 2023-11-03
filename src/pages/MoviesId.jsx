import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import MovieCard from "../Components/Card/MovieCard";
import Crawl from "../Components/Crawl/Crawl";
import { BarLoader } from "react-spinners";
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
      <div className="h-10">
        <GoBackButton url="/movies" />
      </div>
      <div className="relative p-4">
        <MovieCard
          title={selectedMovie?.title}
          date={selectedMovie?.release_date}
          director={selectedMovie?.director}
          producer={selectedMovie?.producer}
          characters={selectedMovie?.characters}
          species={selectedMovie?.species}
          planets={selectedMovie?.planets}
        />
        <div className="h-48 w-100 mt-5 relative bg-black overflow-hidden">
          <button className="absolute z-50 bottom-[-50%] px-3 py-1 bg-white">
            Opening Text
          </button>
          <Crawl text={selectedMovie?.opening_crawl} />
        </div>
      </div>
    </div>
  );
};

export default MoviesId;
