function MovieCard({ sliderMovie }) {
  return (
    <div className="h-130 w-full bg-[url(/src/assets/sliderbg.png)] bg-cover bg-center rounded-2xl ">
      <div className="h-full w-full rounded-2xl  flex items-center justify-between px-20 bg-linear-to-t from-background via-transparent via-90% to-background text-text text-5xl">
        <div className="w-1/2 flex flex-col gap-5">
          <h1>{sliderMovie.Title}</h1>
          <div className="flex gap-20 text-lg text-lightText">
            <p>{sliderMovie.Runtime}.</p>
            <p>{sliderMovie.Country.split(",")[0]}</p>
            <p>{sliderMovie.Year}</p>
          </div>
          <p className="text-lg text-lightText">{sliderMovie.Plot}</p>
          <div className="flex gap-4">
            <a
              href={`https://vidsrc.to/embed/movie/${sliderMovie.imdbID}`}
              className="text-lg font-semibold py-3 rounded-4xl px-6 border-2 border-border bg-indigo-800 cursor-grab"
            >
              Watch Now
            </a>
            <button className="text-lg font-semibold py-3 rounded-4xl px-10 border-2 border-border bg-button cursor-grab">
              Details
            </button>
          </div>
        </div>
        <img
          className="border-2 border-border rounded-2xl"
          src={sliderMovie.Poster}
          alt={sliderMovie.Title}
        />
      </div>
    </div>
  );
}

export default MovieCard;
