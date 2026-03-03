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
      <div className="h-28 w-full bg-background text-text flex justify-between items-center px-20">
        <div className="flex justify-between gap-20">
          <Link to={"/"}>
            <h1 className="text-4xl font-serif ">Nexus Hub</h1>
          </Link>
          <div className="sm-hidden  lg-hidden text-lightText flex justify-evenly items-center pt-2 gap-10 text-xl font-semibold">
            {pages.map((page) => (
              <div key={page}>
                <a href={`http://localhost:5173/#${page}`}>{page}</a>
                {/* <div className="h-0.5 w-full rounded-4xl bg-lightText mt-1"></div> */}
              </div>
            ))}
          </div>
        </div>
        <img
          className="pt-2"
          src="/src/assets/searchIcon.svg"
          alt="search-logo"
          onClick={() => setShowSearch(true)}
        />
      </div>
    </>
  );
}

export default Navbar;
