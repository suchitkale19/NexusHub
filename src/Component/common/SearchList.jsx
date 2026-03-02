import { useContext } from "react";
import { DataContext } from "../../DataContext";
import { Link } from "react-router-dom";

function SearchList() {
  const { searchedMovie } = useContext(DataContext);
  return (
    <div className=" max-h-3/4 w-1/2 bg-background text-text text-2xl flex flex-col items-center overflow-y-auto px-4 py-4 container">
      {searchedMovie.length ? (
        searchedMovie.map((movie) => (
          <Link
            className="w-full"
            to={`details/${movie.Title}`}
            key={movie.imdbID}
          >
            <div className="w-full h-fit rounded-xl hover:bg-secondary flex px-4 gap-4  py-2 ">
              <img
                className="h-28 w-20  rounded object-cover object-top"
                src={
                  movie.Poster === "N/A"
                    ? "src/assets/poster.avif"
                    : movie.Poster
                }
                alt={movie.Title}
              />
              <div>
                <h2 className="hover:underline ">{movie.Title}</h2>
                <p className="text-lightText text-lg">{movie.Year}</p>
                <p className="text-lightText text-lg">
                  {movie.Type.toUpperCase().split("")[0] + movie.Type.slice(1)}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1>Search movies</h1>
      )}
    </div>
  );
}

export default SearchList;
