import { useContext } from "react";
import { DataContext } from "../../DataContext";

function SearchList() {
  const { searchedMovie } = useContext(DataContext);
  return (
    <div className="h-fit w-full text-text text-2xl flex flex-col items-center gap-9">
      {searchedMovie.length ? (
        searchedMovie.map((movie) => (
          <div className="w-1/2 border h-24" key={movie.imdbID}>
            {movie.Title}
          </div>
        ))
      ) : (
        <h1>Search movies</h1>
      )}
    </div>
  );
}

export default SearchList;
