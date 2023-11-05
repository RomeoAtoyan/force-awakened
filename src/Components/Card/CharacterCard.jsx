import React from "react";
import Title from "../Title/Title";
import { BsEyeFill } from "react-icons/bs";

const CharacterCard = ({
  name,
  birth,
  gender,
  eyes,
  hair,
  height,
  weight,
  homeworld,
  terrain,
  played_in,
  setShowMovies,
  showMovies,
}) => {
  return (
    <div>
      <div className="min-h-60 bg-[#1f1f1f] mt-8 p-4">
        <Title className="underline text-white">{name}</Title>
        <div className="pt-5">
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            born : <span className="text-white">{birth}</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            gender : <span className="text-white">{gender}</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            eye color :
            <BsEyeFill color={eyes} />
            <span className="text-white">({eyes || "not available"})</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            hair color : <span className="text-white">{hair}</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            height :<span className="text-white">{height} cm</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            weight : <span className="text-white">{weight} KG</span>
          </span>
          <span className="capitalize text-[#FFE81F]">
            Home :{" "}
            <span className="text-white">
              {homeworld} ({terrain})
            </span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            Movies played in :{" "}
            <span className="text-white cursor-pointer">{played_in}</span>
            {!showMovies && (
              <span
                onClick={() => setShowMovies(true)}
                className="text-gray-700 cursor-pointer"
              >
                (show movies)
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
