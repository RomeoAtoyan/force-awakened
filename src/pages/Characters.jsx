import { useContext } from "react";
import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import GIF from "../Components/GIF/GIF";
import Pagination from "../Components/Pagination/Pagination";
import Title from "../Components/Title/Title";
import AppData from "../Context/ApiData";
import gif from "../assets/gifs/people_gif.gif";
import FadeIn from "../Animations/FadeIn";
import Error from "../Components/Errors/Error";

const Characters = () => {
  const {
    characters,
    characterPage,
    setCharacterPage,
    characterLoading,
    setCharacterLoading,
    errorCodeChars,
  } = useContext(AppData);
  const navigate = useNavigate();

  const goToCharacterId = (url) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = `/characters/${id}`;
    navigate(goToUrl);
  };

  return (
    <FadeIn duration={0.5}>
      <GIF url={"/"} src={gif} />
      {characterLoading ? (
        <div className="h-40 flex items-center justify-center">
          <BarLoader color="#FFE81F" />
        </div>
      ) : (
        <div className="p-4 pb-16 sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
          <Title className="underline" color="white">
            Characters
          </Title>
          <div className="grid grid-rows-5 grid-flow-col gap-4 mt-5">
            {characters?.results?.map((character, index) => (
              <span
                key={index}
                className="flex justify-between items-center text-white font-light tracking-widest bg-[#1f1f1f] px-4 py-3 "
              >
                {character?.name}
                <CiShare1
                  onClick={() => goToCharacterId(character.url)}
                  size={20}
                  color="white"
                />
              </span>
            ))}
          </div>
          <Pagination
            characterPage={characterPage}
            characters={characters}
            setCharacterLoading={setCharacterLoading}
            setCharacterPage={setCharacterPage}
          />
        </div>
      )}
      {errorCodeChars && <Error />}
    </FadeIn>
  );
};

export default Characters;
