import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import MovieCard from "../Components/Card/MovieCard";
import Crawl from "../Components/Crawl/Crawl";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import AppData from "../Context/ApiData";
import FadeIn from "../Animations/FadeIn";

const MoviesId = () => {
  const { selectedMovie, setSelectedMovie } = useContext(AppData);
  const params = useParams();
  const url = findUrl(requests, "movies");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${url}${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedMovie(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [url, params.id, setSelectedMovie]);

  useEffect(() => {
    document.body.style.height = "90vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <FadeIn duration={0.5}>
      <div className="max-h-screen ">
        <div className="h-10 p-4 sm:px-20 mt-2 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
          <GoBackButton url="/movies" />
        </div>
        {loading ? (
          <div className="h-40 flex items-center justify-center">
            <BarLoader width={300} color="yellow" />
          </div>
        ) : (
          <FadeIn duration={.5}>
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
          </FadeIn>
        )}
      </div>
    </FadeIn>
  );
};

export default MoviesId;
