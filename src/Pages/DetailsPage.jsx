import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";
import MovieTitle from "../Component/Details/MovieTitle";
import DualButtons from "../Component/common/DualButtons";
import MovieGenre from "../Component/Details/MovieGenre";
import MovieDetails from "../Component/Details/MovieDetails";

function DetailsPage() {
  const { setMovie, detailedMovie } = useContext(DataContext);
  const title = useParams();
  useEffect(() => {
    setMovie(title);
  }, [title]);
  const { Title, Poster, Plot, imdbID, Genre } = detailedMovie;

  return (
    <div>
      <div className="bg-background flex gap-20 text-text px-44 py-10">
        <div className="">
          <img className="h-111 w-auto rounded-3xl" src={Poster} />
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          <MovieTitle />
          <p className="w-3/4 text-lg text-lightText">{Plot}</p>
          <DualButtons
            name1={"Watch Now"}
            name2={"Watch Trailer"}
            imdbID={imdbID}
            Title={Title}
          />
          <MovieGenre Genre={Genre} />
          <MovieDetails detailedMovie={detailedMovie} />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
