import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";
import MovieTitle from "../Component/Details/MovieTitle";
import DualButtons from "../Component/common/DualButtons";
import MovieGenre from "../Component/Details/MovieGenre";
import MovieDetails from "../Component/Details/MovieDetails1";
import MovieDetails2 from "../Component/Details/MovieDetails2";
import SearchPage from "../Component/common/SearchPage";
import SkeletonDetailPage from "../Component/Details/SkeletonDetailPage";

function DetailsPage() {
  const { setMovie, detailedMovie } = useContext(DataContext);
  const { title } = useParams();
  useEffect(() => {
    setMovie(title);
  }, [setMovie, title]);

  if (!detailedMovie) {
    return <SkeletonDetailPage />;
  }
  const { Title, Poster, Type, Plot, imdbID, Genre } = detailedMovie;

  return (
    <div className="bg-background">
      <div className=" flex gap-20 text-text px-44 py-10">
        <div className="">
          <img
            className="h-111 w-auto rounded-3xl"
            src={Poster === "N/A" ? "/src/assets/poster.avif" : Poster}
            alt={Title}
          />
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          <MovieTitle />
          <p className="w-3/4 text-lg text-lightText">{Plot}</p>
          <DualButtons
            name1={"Watch Now"}
            name2={"Watch Trailer"}
            imdbID={imdbID}
            Title={Title}
            Type={Type}
          />
          <MovieGenre Genre={Genre} />
          <MovieDetails detailedMovie={detailedMovie} />
        </div>
      </div>
      <MovieDetails2 detailedMovie={detailedMovie} />
    </div>
  );
}

export default DetailsPage;
