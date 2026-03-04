import { useContext } from "react";
import { DataContext } from "../../DataContext";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function Navbar() {
  const { setShowSearch, showSearch } = useContext(DataContext);
  const pages = ["Home", "Movies", "TV-Shows", "Trending"];
  return (
    <>
      {showSearch && <SearchPage />}
      <div className="h-18 lg:h-28 w-full bg-background text-text flex justify-between items-center lg:px:20 px-10 ">
        <div className="flex justify-between gap-20">
          <div className="flex items-center gap-2">
            <div className="lg:hidden text-2xl">☰</div>
            <Link to={"/"}>
              <h1 className="text-xl lg:text-4xl pt-1 font-serif ">
                Nexus Hub
              </h1>
            </Link>
          </div>
          <div className=" text-lightText hidden sm:hidden lg:flex justify-evenly items-center pt-2 gap-10 text-xl font-semibold">
            {pages.map((page) => (
              <div key={page}>
                <a href={`http://localhost:5173/#${page}`}>{page}</a>
                {/* <div className="h-0.5 w-full rounded-4xl bg-lightText mt-1"></div> */}
              </div>
            ))}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 lg:h-9 w-7 lg:w-9 fill-lightText hover:fill-text"
          viewBox="0 -960 960 960"
          fill="#c3bfbf"
          onClick={() => setShowSearch(true)}
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </div>
    </>
  );
}

export default Navbar;
