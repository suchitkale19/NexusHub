// function MovieDetails({ detailedMovie }) {
//   const details = [
//     { label: "Awards", value: detailedMovie.Awards },
//     { label: "Actors", value: detailedMovie.Actors },
//     { label: "IMDb Votes", value: detailedMovie.imdbVotes },
//     { label: "Box Office", value: detailedMovie.BoxOffice },
//     { label: "Country", value: detailedMovie.Country },
//     { label: "Director", value: detailedMovie.Director },
//     { label: "Writer", value: detailedMovie.Writer },
//     { label: "Language", value: detailedMovie.Language },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 text-xl font-semibold">
//       {details.map(({ label, value }) => (
//         <div key={label}>
//           <h2 className="text-zinc-400 ">{label} :</h2>
//           <p className="">{value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MovieDetails;
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
