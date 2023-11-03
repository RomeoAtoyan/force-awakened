import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import MovieCard from "../Components/Card/MovieCard";
import Crawl from "../Components/Crawl/Crawl";

const MoviesId = () => {
  const params = useParams();
  const detailsUrl = findUrl(requests, "movies");
  const [movie, setMovie] = useState([]);

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
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDetails();
  }, [detailsUrl, params.id]);

  return (
    <div className="max-h-screen">
      <div className="h-10">
        <GoBackButton url="/characters" />
      </div>
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
    </div>
  );
};

export default MoviesId;
