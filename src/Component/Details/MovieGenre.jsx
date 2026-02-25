function MovieGenre({ Genre }) {
  return (
    <div className="flex gap-4">
      {Genre.split(",").map((genre) => (
        <div
          key={genre}
          className="h-fit w-fit font-semibold rounded-2xl p-2  bg-border "
        >
          {genre}
        </div>
      ))}
    </div>
  );
}

export default MovieGenre;
