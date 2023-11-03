import { useContext, useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GIF from "../Components/GIF/GIF";
import Title from "../Components/Title/Title";
import AppData from "../Context/ApiData";
import gif from "../assets/gifs/people_gif.gif";
import { BarLoader } from "react-spinners";
const Characters = () => {
  const {
    characters,
    characterPage,
    setCharacterPage,
    characterLoading,
    setCharacterLoading,
  } = useContext(AppData);
  const navigate = useNavigate();

  const goToCharacterId = (url) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = `/characters/${id}`;
    navigate(goToUrl);
  };

  const nextPage = () => {
    setCharacterLoading(true);
    setCharacterPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (characterPage <= 1) {
      return;
    } else {
      setCharacterLoading(true);
      setCharacterPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <GIF src={gif} />
      {characterLoading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="p-4 pb-16">
          <Title className="underline" color="white">
            Characters
          </Title>
          <div className="flex flex-col gap-2 mt-5">
            {characters?.results?.map((character, index) => (
              <span
                key={index}
                className="flex justify-between items-center text-white font-light tracking-widest bg-[#1f1f1f] px-4 py-3 "
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
          <div className="mt-5 flex justify-center items-center gap-10 bg-[#1f1f1f] py-2 text-white">
            <button onClick={prevPage}>
              <MdNavigateBefore color="#FFE81F" size={30} />
            </button>
            {characterPage}
            <button onClick={nextPage}>
              <MdNavigateNext color="#FFE81F" size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
