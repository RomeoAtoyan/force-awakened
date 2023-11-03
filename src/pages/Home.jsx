import { Link } from "react-router-dom";
import LongText from "../Components/LongText/LongText";
import gif from "../assets/gifs/home_gif.gif";
import Title from "../Components/Title/Title";
import GIF from "../Components/GIF/GIF";

const Home = () => {
  return (
    <>
      <GIF src={gif} />
      <div className="p-4 text-white sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
        <Title className="lg:text-3xl">Star Wars newbie ?</Title>
        <LongText className={"mt-4 lg:text-3xl"}>
          <span className="text-[#FFE81F]  text-sm lg:text-lg ">Star Wars</span>{" "}
          is a famous sci-fi franchise set in a distant galaxy. It follows the
          battle between{" "}
          <span className="text-blue-700  text-sm lg:text-lg ">good</span> and{" "}
          <span className="text-red-700  text-sm lg:text-lg">evil</span> , with
          the Rebel Alliance fighting the Galactic Empire. The story features
          Jedi knights, Sith lords, smugglers, and droids. Themes of hope,
          redemption, and the power of the Force are explored. Star Wars
          showcases space battles, lightsaber duels, and encounters with unique
          aliens. It's known for iconic vehicles like the Millennium Falcon and
          captivating planets. Whether you're a newcomer or a fan, Star Wars
          offers an immersive adventure loved by millions worldwide.
        </LongText>
        <Link to="/characters">
          <button className="py-2 px-4 bg-black text-StarWars mt-10 text-[#FFE81F]">
            Explore the characters
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
