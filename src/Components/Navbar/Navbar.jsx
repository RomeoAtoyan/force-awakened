import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import FadeIn from "../../Animations/FadeIn";
import { Link, useNavigate } from "react-router-dom";
import { requests } from "../../ApiRequests/requests";
import { BarLoader } from "react-spinners";
import { CiShare1 } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);
  const [results, setResults] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getResults = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
        setQuery("");
        console.log(data.results);
      });
  };

  const goToCharacterId = (url) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = `/characters/${id}`;
    setOpen(false);
    setQuery("");
    setLoading(false);
    setInput(false);
    navigate(goToUrl);
  };

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
          <Link
            onClick={() => {
              setInput(false);
              setOpen(false);
            }}
            to="/"
          >
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
          <div className="h-max w-full shadow-lg border-b-2 border-[#FFE81F] absolute bg-black">
            <div>
              <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="search characters"
                className="border-none outline-none m-4 pl-1"
                type="text"
              />
              <button className="text-black bg-white px-2" onClick={getResults}>
                Search
              </button>
            </div>
            {loading ? (
              <div className="m-4">
                <BarLoader color="yellow" />
              </div>
            ) : (
              results && (
                <div className="flex flex-col gap-2 p-4">
                  {results?.map((result, index) => (
                    <span
                      key={index}
                      className="flex justify-between items-center text-white font-light tracking-widest bg-[#1f1f1f] px-4 py-3 "
                    >
                      {result?.name || result?.title}
                      <CiShare1
                        onClick={() => goToCharacterId(result?.url)}
                        size={20}
                        color="white"
                      />
                    </span>
                  ))}
                </div>
              )
            )}
          </div>
        </FadeIn>
      )}
      {open && (
        <FadeIn>
          <aside className="z-50 absolute h-40 w-full bg-black text-white flex items-center gap-1 flex-col justify-center">
            <Link
              onClick={() => {
                setInput(false);
                setOpen(false);
              }}
              to="/movies"
            >
              <h2 className="capitalize py-1 px-2">Movies</h2>
            </Link>
            <Link
              onClick={() => {
                setInput(false);
                setOpen(false);
              }}
              to="/characters"
            >
              <h2 className="capitalize py-1 px-2">Characters</h2>
            </Link>
          </aside>
        </FadeIn>
      )}
    </>
  );
};

export default Navbar;
