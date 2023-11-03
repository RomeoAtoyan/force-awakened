import React, { createContext, useEffect, useState } from "react";
import { requests } from "../ApiRequests/requests";
import findUrl from "../ApiRequests/findUrl";
const AppData = createContext();

export const AppDataProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [characters, setCharacters] = useState([]);

  const filmUrl = findUrl(requests, "movies");
  const peopleUrl = findUrl(requests, "characters");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(peopleUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCharacters();
  }, [filmUrl, peopleUrl]);

  return (
    <AppData.Provider value={{ selectedMovie, setSelectedMovie, characters }}>
      {children}
    </AppData.Provider>
  );
};

export default AppData;
