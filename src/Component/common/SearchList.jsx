import { useContext } from "react";
import { DataContext } from "../../DataContext";

function SearchList() {
  const { searchedMovie } = useContext(DataContext);
  return (
    <div className="h-1/2 w-1/2 bg-background text-text text-2xl flex flex-col items-center overflow-y-auto">
      {searchedMovie.length ? (
        searchedMovie.map((movie) => (
          <div
            className="w-full  h-fit rounded border-b border-border flex px-4 gap-4  py-2"
            key={movie.imdbID}
          >
            <img
              className="h-28 w-20  rounded object-cover object-top"
              src={movie.Poster}
              alt={movie.Title}
            />
            <div>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>Search movies</h1>
      )}
    </div>
  );
}

export default SearchList;
