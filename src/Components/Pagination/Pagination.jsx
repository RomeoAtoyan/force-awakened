// props : characterPage, characters, setCharacterLoading

import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { RiSkipLeftLine, RiSkipRightLine } from "react-icons/ri";

const Pagination = ({
  characterPage,
  characters,
  setCharacterLoading,
  setCharacterPage,
}) => {
  const nextPage = () => {
    const lastPage = Math.ceil(characters?.count / 10);

    if (characterPage < lastPage) {
      setCharacterLoading(true);
      setCharacterPage((prevPage) => prevPage + 1);
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (characterPage <= 1) {
      return;
    } else {
      setCharacterLoading(true);
      setCharacterPage((prevPage) => prevPage - 1);
    }
  };

  const skipToEnd = () => {
    const lastPage = Math.ceil(characters?.count / 10);

    if (characterPage < lastPage) {
      setCharacterLoading(true);
      setCharacterPage(lastPage);
    }
  };

  const goToStart = () => {
    if (characterPage !== 1) {
      setCharacterLoading(true);
      setCharacterPage(1);
    }
  };

  return (
    <div className="mt-5 flex justify-center items-center gap-4 bg-[#1f1f1f] py-2 text-white">
      <button onClick={goToStart}>
        <RiSkipLeftLine color="#FFE81F" size={20} />
      </button>
      <button onClick={prevPage}>
        <MdNavigateBefore color="#FFE81F" size={30} />
      </button>
      <span>
        {characterPage} of {Math.ceil(characters?.count / 10) || "no pages"}
      </span>
      <button onClick={nextPage}>
        <MdNavigateNext color="#FFE81F" size={30} />
      </button>
      <button onClick={skipToEnd}>
        <RiSkipRightLine color="#FFE81F" size={20} />
      </button>
    </div>
  );
};

export default Pagination;
