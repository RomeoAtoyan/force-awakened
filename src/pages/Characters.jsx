import { useContext, useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import GIF from "../Components/GIF/GIF";
import Title from "../Components/Title/Title";
import AppData from "../Context/ApiData";
import gif from "../assets/gifs/films_gif.gif";

const Characters = () => {
  const { characters } = useContext(AppData);
  const navigate = useNavigate();

  const goToCharacterId = (url) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = `/characters/${id}`;
    navigate(goToUrl);
  };

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div>
      <GIF src={gif} />
      <div className="p-4">
        <Title className="underline" color="white">
          Characters
        </Title>
        <div className="flex flex-col gap-2 mt-5">
          {characters?.results?.map((character, index) => (
            <span
              key={index}
              className="flex justify-between items-center text-StarWars text-white text-sm font-light tracking-widest bg-[#1f1f1f] px-4 py-3 "
            >
              {character.name}
              <CiShare1
                onClick={() => goToCharacterId(character.url)}
                size={20}
                color="white"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
