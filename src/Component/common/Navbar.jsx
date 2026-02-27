import { useContext } from "react";
import { DataContext } from "../../DataContext";

function Navbar() {
  const { setShowSearch } = useContext(DataContext);
  const pages = ["Home", "Movies", "TV Shows", "Trending"];
  return (
    <div className="h-28 w-full bg-background text-text flex justify-between items-center px-20">
      <div className="flex justify-between gap-20">
        <h1 className="text-4xl">🎥 Nexus Hub</h1>
        <div className="sm-hidden  lg-hidden text-lightText flex justify-evenly items-center pt-2 gap-10 text-xl font-semibold">
          {pages.map((page) => (
            <div key={page}>
              <h2>{page}</h2>
              <div className="h-0.5 w-full rounded-4xl bg-lightText mt-1"></div>
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
  );
}

export default Navbar;
