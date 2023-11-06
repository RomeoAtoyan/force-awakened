import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import FadeIn from "../../Animations/FadeIn";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(false);
  const [results, setResults] = useState("");
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);

  const getResults = async () => {
    if (query) {
      try {
        setLoading(true);
        const res1 = await fetch(
          `https://swapi.dev/api/people/?search=${query}`
        );
        const data1 = await res1.json();
        setArr1(data1?.results);

        const res2 = await fetch(
          `https://swapi.dev/api/films/?search=${query}`
        );
        const data2 = await res2.json();
        setArr2(data2?.results);
        setLoading(false);

        if (!data1.results.length && !data2.results.length) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      } catch (error) {
        setError(true);
        console.error(error);
      }
    } else {
      setError(true);
    }
  };

  const whenError = error
    ? "bg-red-300 border-2 border-red-700"
    : "border-none";

  useEffect(() => {
    if (arr1 && arr2) {
      setResults([...arr1, ...arr2]);
      setLoading(false);
    }
  }, [arr1, arr2]);

  const goToCharacterId = (url, data) => {
    const modifiedString = url.split("/");
    const id = modifiedString[modifiedString.length - 2];
    const goToUrl = "gender" in data ? `/characters/${id}` : `/movies/${id}`;
    setOpen(false);
    setQuery("");
    setLoading(false);
    setInput(false);
    setResults([]);
    navigate(goToUrl);
  };

  return (
    <>
      <header className="relative">
        <nav className="flex flex-1 items-center justify-between h-16 bg-[#1f1f1f] p-4 sm:px-20 lg:px-40 xl:px-52 lt:px-[18rem] 2xl:px-[35rem]">
          <div className="md:hidden">
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
          </div>
          <div className=" hide-mobile md:flex md:w-8 md:gap-10 text-white">
            <Link
              onClick={() => {
                setInput(false);
                setOpen(false);
              }}
              className="bg-[#242424] px-3 py-1"
              to="/movies"
            >
              Movies
            </Link>
            <Link
              onClick={() => {
                setInput(false);
                setOpen(false);
              }}
              className="bg-[#242424] px-3 py-1"
              to="/characters"
            >
              Characters
            </Link>
          </div>
          <Link
            onClick={() => {
              setInput(false);
              setOpen(false);
            }}
            to="/"
          >
            <h2 className=" text-[#FFE81F] text-2xl text-shadow text-StarWars lg:text-3xl">
              Star Wars
            </h2>
          </Link>
          <AiOutlineSearch
            onClick={() => {
              setOpen(false);
              setInput(!input);
              setQuery("");
              setResults([]);
              setError(false);
              setNothingFound(false);
            }}
            color="white"
            size={25}
          />
        </nav>
        {input && (
          <FadeIn duration={.5}>
            <div className="w-full md:w-max px-4 right-0 md:right-20 bg-gray-700 lg:right-[15%] 2xl:right-[24.5%]">
              <div className="pt-4">
                <div>
                  <input
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setError(false);
                    }}
                    value={query}
                    placeholder="search"
                    className={`${whenError} remove-border-radius outline-none m-4 pl-1`}
                    type="text"
                  />
                  <button
                    className="text-black bg-white px-2 p-0.5"
                    onClick={getResults}
                  >
                    Go
                  </button>
                </div>
                {error && (
                  <span className="text-red-600 ml-4">dont forget what !</span>
                )}
              </div>
              {loading ? (
                <div className="m-4">
                  <BarLoader color="yellow" />
                </div>
              ) : (
                results && (
                  <div className="flex flex-col gap-2 p-4">
                    {results?.map((result, index) => (
                      <div key={index}>
                        <span className="flex justify-between items-center text-white font-light tracking-widest bg-[#1f1f1f] px-4 py-3 ">
                          {result?.name ||
                            result?.title ||
                            "No results were found matching your input"}
                          <CiShare1
                            onClick={() => goToCharacterId(result?.url, result)}
                            size={20}
                            color="white"
                          />
                        </span>
                      </div>
                    ))}
                    {nothingFound && (
                      <span className="bg-[#1f1f1f] px-4 py-3 text-white">
                        Nothing found...
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </FadeIn>
        )}
      </header>

      {open && (
        <FadeIn duration={0.5}>
          <aside className="h-40 w-full bg-black text-white flex items-center gap-1 flex-col justify-center md:hidden">
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
