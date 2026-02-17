import { useState } from "react";

function Card({ movie }) {
  const [show, setShow] = useState(false);
  return (
    <div className="h-fit w-auto  rounded-2xl text-text">
      <img
        className="h-80 rounded-2xl w-full object-cover"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className=" px-2 py-1 ">
        <h1
          onClick={() => setShow(!show)}
          className={`text-xl font-semibold ${show ? "" : "truncate "}`}
        >
          {movie.Title}
        </h1>
        <div className="flex w-full justify-between text-lg text-lightText">
          <h2>{movie.Runtime}.</h2>
          <h2>⭐{movie.imdbRating}</h2>
          <h2>{movie.Year}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
