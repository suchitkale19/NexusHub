function MovieGenre({ Genre }) {
  return (
    <div className="flex gap-4">
      {Genre.split(",").map((genre) => (
        <div
          key={genre}
          className="h-fit w-fit font-semibold rounded-xl px-4 py-2  bg-border "
        >
          {genre}
        </div>
      ))}
    </div>
  );
}

export default MovieGenre;
