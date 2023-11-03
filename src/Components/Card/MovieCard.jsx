import React from "react";
import Title from "../Title/Title";
import LongText from "../LongText/LongText";

const MovieCard = ({
  title,
  director,
  producer,
  date,
  planets,
  characters,
  species,
}) => {
  return (
    <div>
      <div className="min-h-60 bg-[#1f1f1f] mt-8 p-4">
        <div className="pt-5">
          <Title color="white">
            {title} ({new Date(date).getFullYear()})
          </Title>
          <LongText className="mt-3 text-slate-500">
            Was directed by: <span>{director}</span> and produced by: {producer}{" "}
            .
            <br />
            The film contained {characters?.length} characters spread over{" "}
            {planets?.length} different planets and {species?.length} species.
          </LongText>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
