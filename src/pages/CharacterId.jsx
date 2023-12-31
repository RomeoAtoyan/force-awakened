import { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import FadeIn from "../Animations/FadeIn";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import CharacterCard from "../Components/Card/CharacterCard";
import Error from "../Components/Errors/Error";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import Title from "../Components/Title/Title";

const CharacterId = () => {
  const navigate = useNavigate();
  const params = useParams();
  const detailsUrl = findUrl(requests, "characters");
  const [character, setCharacter] = useState([]);
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [errorCode, setErrorCode] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsUrl + params.id);
        if (!response.ok) {
          setErrorCode(response?.status);
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDetails();
  }, [detailsUrl, params.id, setErrorCode]);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch(character.homeworld);
        if (!response.ok) {
          setErrorCode(response.status);
        }
        const data = await response.json();
        setHome(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (character.homeworld) {
      fetchHome();
    }
  }, [character.homeworld]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (Array.isArray(character?.films)) {
        const movieDataPromises = character.films.map(async (filmUrl) => {
          const response = await fetch(filmUrl);
          if (response.ok) {
            const movieData = await response.json();
            return movieData;
          }
          return null;
        });

        const movieDetails = await Promise.all(movieDataPromises);
        setMovies(movieDetails);
        setMoviesLoading(false);
      }
    };

    fetchMovies();
  }, [character]);

  const goToMovieId = (url) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = `/movies/${id}`;
    navigate(goToUrl);
  };

  return (
    <>
      <div className="h-10 sm:px-20 mt-2 p-4 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
        <GoBackButton url="/characters" />
      </div>
      {loading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="relative p-4 sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] lt:flex lt:items-end 2xl:px-[35rem]">
          <FadeIn duration={0.5}>
            {errorCode ? (
              <Error className="top-48" errorCode={errorCode} />
            ) : (
              <CharacterCard
                name={character?.name}
                birth={character?.birth_year}
                gender={character?.gender}
                eyes={character?.eye_color}
                hair={character?.hair_color}
                height={character?.height}
                weight={character?.mass}
                homeworld={home?.name}
                terrain={home?.terrain}
                played_in={character?.films?.length}
                setShowMovies={setShowMovies}
                showMovies={showMovies}
              />
            )}
          </FadeIn>
          {showMovies &&
            (moviesLoading ? (
              <div className="p-4 h-40 flex justify-center items-center">
                <BarLoader color="#FFE81F" />
              </div>
            ) : (
              <FadeIn duration={0.5}>
                <div className="p-4 bg-[#1f1f1f] mt-5 lt:ml-5">
                  <Title className="underline" color="white">
                    Movies:
                  </Title>
                  <div className="flex flex-col gap-2 mt-5 xl:grid xl:grid-rows-2 xl:grid-flow-col xl:gap-4">
                    {movies?.map((movie, index) => (
                      <span
                        key={index}
                        className="flex justify-between items-center text-white text-sm font-light tracking-widest bg-[#242424] px-4 py-3  "
                      >
                        {movie?.title}
                        <CiShare1
                          onClick={() => goToMovieId(movie?.url)}
                          size={20}
                          color="white"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
        </div>
      )}
    </>
  );
};

export default CharacterId;
