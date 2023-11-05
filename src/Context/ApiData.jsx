import React, { createContext, useEffect, useState } from "react";
import { requests } from "../ApiRequests/requests";
import findUrl from "../ApiRequests/findUrl";
const AppData = createContext();

export const AppDataProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [characters, setCharacters] = useState([]);
  const [characterPage, setCharacterPage] = useState(1);
  const [characterLoading, setCharacterLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [moviesPage, setMoviesPage] = useState(1);
  const [moviesLoading, setMoviesLoading] = useState(true);

  const [errorCodeChars, setErrorCodeChars] = useState(null);
  const [errorCodeMovies, setErrorCodeMovies] = useState(null);

  const filmUrl = findUrl(requests, "movies");
  const peopleUrl = findUrl(requests, "characters");

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`${peopleUrl}?page=${characterPage}`);
      if (!response.ok) {
        const statusCode = response.status;
        setErrorCodeChars(statusCode);
        setCharacterLoading(true);
      } else {
        setErrorCodeChars(null);
      }
      const data = await response.json();
      setCharacters(data);
      setCharacterLoading(false);
    };

    fetchCharacters();
  }, [peopleUrl, characterPage]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`${filmUrl}?page=${moviesPage}`);
      if (!response.ok) {
        const statusCode = response.status;
        setErrorCodeMovies(statusCode);
        setMoviesLoading(true);
      } else {
        setErrorCodeMovies(null);
      }
      const data = await response.json();
      setMovies(data);
      setMoviesLoading(false);
    };

    fetchMovies();
  }, [filmUrl, moviesPage]);

  return (
    <AppData.Provider
      value={{
        movies,
        setMovies,
        moviesPage,
        setMoviesPage,
        moviesLoading,
        setMoviesLoading,
        characters,
        characterPage,
        setCharacterPage,
        characterLoading,
        setCharacterLoading,
        selectedMovie,
        setSelectedMovie,
        errorCodeChars,
        setErrorCodeChars,
        errorCodeMovies,
        setErrorCodeMovies,
      }}
    >
      {children}
    </AppData.Provider>
  );
};

export default AppData;
