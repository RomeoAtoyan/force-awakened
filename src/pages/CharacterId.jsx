import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import findUrl from "../ApiRequests/findUrl";
import { requests } from "../ApiRequests/requests";
import CharacterCard from "../Components/Card/CharacterCard";
import GoBackButton from "../Components/GoBackButton/GoBackButton";

const CharacterId = () => {
  const params = useParams();
  const detailsUrl = findUrl(requests, "characters");
  const [character, setCharacter] = useState([]);
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(detailsUrl + params.id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDetails();
  }, [detailsUrl, params.id]);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch(character.homeworld);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHome(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchHome();
  }, [character.homeworld]);

  return (
    <>
      <div className="h-10">
        <GoBackButton url="/characters" />
      </div>
      {loading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="relative">
          <CharacterCard
            name={character.name}
            birth={character.birth_year}
            gender={character.gender}
            eyes={character.eye_color}
            hair={character.hair_color}
            height={character.height}
            weight={character.mass}
            homeworld={home.name}
            terrain={home.terrain}
          />
        </div>
      )}
    </>
  );
};

export default CharacterId;
