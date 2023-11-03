import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import MovieCard from "../Components/Card/MovieCard";
import Crawl from "../Components/Crawl/Crawl";
import { BarLoader } from "react-spinners";
const MoviesId = () => {
  const params = useParams();
  const detailsUrl = findUrl(requests, "movies");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsUrl + params.id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDetails();

    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, [detailsUrl, params.id]);

  return (
    <div className="max-h-screen  overflow-hidden">
      <div className="h-10">
        <GoBackButton url="/movies" />
      </div>
      {loading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="relative p-4">
          <MovieCard
            title={movie.title}
            date={movie.release_date}
            director={movie.director}
            producer={movie.producer}
            characters={movie.characters}
            species={movie.species}
            planets={movie.planets}
          />
          <Crawl text={movie.opening_crawl} />
        </div>
      )}
    </div>
  );
};

export default MoviesId;
