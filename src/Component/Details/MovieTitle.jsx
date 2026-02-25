import { useContext } from "react";
import { DataContext } from "../../DataContext";

function MovieTitle() {
  const { detailedMovie } = useContext(DataContext);
  const { Title, Runtime, Released, Year, Type, imdbRating } = detailedMovie;
  return (
    <div className="flex  justify-between items-center">
      <div className="grid gap-4">
        <h1 className="text-5xl font-bold">{Title}</h1>
        <div className="flex gap-10">
          <h2>{Type.charAt(0).toUpperCase() + Type.slice(1)}</h2>|
          <h2>{Runtime}</h2>|<h2>{Year}</h2>|<h2>Released on : {Released}</h2>
        </div>
      </div>
      <div>
        <h1 className="w-28  text-4xl font-semibold ">{imdbRating} ⭐</h1>
      </div>
    </div>
  );
}

export default MovieTitle;
