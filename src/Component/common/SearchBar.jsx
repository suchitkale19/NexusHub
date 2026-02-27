import { useContext } from "react";
import { DataContext } from "../../DataContext";

function SearchBar() {
  const { setShowSearch, query, setQuery } = useContext(DataContext);
  return (
    <div
      className="w-full h-fit flex justify-center py-20   "
      onClick={() => setShowSearch(false)}
    >
      <input
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 h-12 text-xl rounded-xl px-18 relative bg-background"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search......"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-logo hover:fill-primary absolute left-[27%] top-23"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
    </div>
  );
}

export default SearchBar;
