function MovieDetails({ detailedMovie }) {
  const { Awards, Actors, BoxOffice, Country, Director, Writer, imdbVotes } =
    detailedMovie;
  return (
    <div>
      {[Awards, Actors, BoxOffice, Country, Director, Writer, imdbVotes].map(
        (detail) => (
          <h2 key={detail}>
            Awards : <strong>{detail}</strong>
          </h2>
        ),
      )}
    </div>
  );
}

export default MovieDetails;
