import { useEffect, useState } from "react";
import { BsFillForwardFill } from "react-icons/bs";
import r2d2 from "../assets/r2d2.png";
import bg from "../assets/tatooine.avif";
import FadeIn from "../Animations/FadeIn";
import { useNavigate } from "react-router-dom";

const LittleGame = () => {
  const [charPosition, setCharPosition] = useState(0);
  const [bgPos, setBgPos] = useState(0);
  const navigate = useNavigate();

  const moveForward = () => {
    charPosition <= 280 && setCharPosition((prevPos) => prevPos + 20);
    charPosition <= 280 && setBgPos((prevPos) => prevPos - 100);
  };

  useEffect(() => {
    charPosition === 280 && navigate("/");
  }, [charPosition]);

  return (
    <div className="p-4 h-[70vh] text-white sm:px-20 sm:hidden lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
      <div
        className="h-full overflow-hidden flex items-end pb-[8rem] "
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-x",
          backgroundPositionX: bgPos,
        }}
      >
        <FadeIn duration={1}>
          <img
            style={{
              transform: `translateX(${charPosition}%)`,
            }}
            width={150}
            src={r2d2}
            alt="r2d2"
          />
        </FadeIn>
      </div>
      <div className="flex items-center justify-center py-4 mt-5 bg-[#1f1f1f] ">
        <button className="ml-5 flex items-center gap-3" onClick={moveForward}>
          Move Forward <BsFillForwardFill size={40} color="gold" />
        </button>
      </div>
    </div>
  );
};

export default LittleGame;
