function MovieDetails2({ detailedMovie }) {
  const detail2 = [
    { label: "Awards", value: detailedMovie.Awards },
    { label: "Director", value: detailedMovie.Director },
    { label: "Country", value: detailedMovie.Country },
    { label: "Writer", value: detailedMovie.Writer },
    { label: "Language", value: detailedMovie.Language },
    { label: "PG Rated", value: detailedMovie.Rated },
  ];
  return (
    <div className=" grid grid-cols-3 px-40 text-text text-xl border-y border-border  py-6">
      {detail2.map((detail) => (
        <div
          className=" text-xl font-semibold py-2 px-10 border-x border-border "
          key={detail.label}
        >
          <h2 className="text-lightText ">{detail.label} :</h2>
          <p className="">{detail.value}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails2;
