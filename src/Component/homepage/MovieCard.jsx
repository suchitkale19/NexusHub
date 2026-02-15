function MovieCard({ sliderMovie }) {
  return (
    <div className="h-130 w-full bg-secondary  text-text text-5xl">
      <h1>{sliderMovie.Title}</h1>
      <img
        className="w-[70%] h-110 object-cover  object-top-right"
        src={sliderMovie.Poster}
        alt=""
      />
    </div>
  );
}

export default MovieCard;
