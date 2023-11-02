import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import FadeIn from "../../Animations/FadeIn";
import { Link } from "react-router-dom";
import { requests } from "../../ApiRequests/requests";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);

  return (
    <>
      <header className="relative">
        <nav className="flex flex-1 items-center justify-between h-16 bg-[#1f1f1f] p-4">
          {open ? (
            <AiOutlineClose
              size={40}
              color="white"
              onClick={() => setOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => {
                setInput(false);
                setOpen(true);
              }}
              color="white"
              size={40}
            />
          )}
          <Link to="/">
            <h2 className=" text-[#FFE81F] text-2xl text-shadow text-StarWars">
              Star Wars
            </h2>
          </Link>
          <AiOutlineSearch
            onClick={() => {
              setOpen(false);
              setInput(!input);
            }}
            color="white"
            size={25}
          />
        </nav>
      </header>
      {input && (
        <FadeIn>
          <div className="h-80 w-full absolute bg-black">
            <input
              placeholder="search"
              className="border-none outline-none m-4 pl-1"
              type="text"
            />
          </div>
        </FadeIn>
      )}
      {open && (
        <FadeIn>
          <aside className="absolute h-64 w-full bg-black text-white flex items-center gap-1 flex-col justify-center">
            {requests.map((request, index) => (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                to={request.route}
              >
                <h2 className="capitalize py-1 px-2">{request.name}</h2>
              </Link>
            ))}
          </aside>
        </FadeIn>
      )}
    </>
  );
};

export default Navbar;
