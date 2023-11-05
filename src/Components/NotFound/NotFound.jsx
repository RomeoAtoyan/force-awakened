import { Link } from "react-router-dom";
import Title from "../Title/Title";

const NotFound = () => {
  return (
    <div className="p-4 flex mt-24 justify-center flex-col items-center sm:h-80  text-white sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
      <Title>Not found !?</Title>
      <Link to="/">
        <button className="py-2 px-4 bg-black text-StarWars mt-10 text-[#FFE81F]">
          Go back to homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
