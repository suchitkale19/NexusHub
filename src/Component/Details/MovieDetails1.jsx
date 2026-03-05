function MovieDetails({ detailedMovie }) {
  const detail1 = [
    { label: "Box Office", value: detailedMovie.BoxOffice },
    { label: "IMDb Votes", value: detailedMovie.imdbVotes },
    { label: "Runtime", value: detailedMovie.Runtime },
    { label: "Released Date", value: detailedMovie.Released },
  ];

  return (
    <div className=" flex text-text justify-between border-y border-border py-4">
      {detail1.map((detail) => (
        <div
          className="bg-secondary text-xl font-semibold py-2 px-10 text-center border  border-border rounded-xl"
          key={detail.label}
        >
          <h2 className="text-lightText ">{detail.label}</h2>
          <p className="">{detail.value}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;
