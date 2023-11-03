import React, { createContext, useEffect, useState } from "react";
import { requests } from "../ApiRequests/requests";
import findUrl from "../ApiRequests/findUrl";
const AppData = createContext();

export const AppDataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [characterPage, setCharacterPage] = useState(1);
  const [characterLoading, setCharacterLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [moviesPage, setMoviesPage] = useState(1);
  const [moviesLoading, setMoviesLoading] = useState(true);

  const filmUrl = findUrl(requests, "movies");
  const peopleUrl = findUrl(requests, "characters");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${peopleUrl}?page=${characterPage}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data);
        setCharacterLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCharacters();
  }, [peopleUrl, characterPage, characterLoading]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${filmUrl}?page=${moviesPage}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
        setMoviesLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, [filmUrl, moviesPage, moviesLoading]);

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
      }}
    >
      {children}
    </AppData.Provider>
  );
};

export default AppData;
