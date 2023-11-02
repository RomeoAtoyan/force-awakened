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
}) => {
  return (
    <div>
      <div className="min-h-60 bg-[#1f1f1f] mt-8 m-4 p-4">
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
            <span className="text-white">
              ({eyes || "not available"})
            </span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            hair color :{" "}
            <span className="text-white">{hair}</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            height :<span className="text-white">{height} cm</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            weight : <span className="text-white">{weight} KG</span>
          </span>
          <span className="capitalize text-[#FFE81F] flex items-center gap-3">
            Home :{" "}
            <span className="text-white">
              {homeworld} ({terrain})
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
