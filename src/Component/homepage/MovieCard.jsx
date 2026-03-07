// import { Link } from "react-router-dom";

// function MovieCard({ sliderMovie }) {
//   return (
//     <>
//       {sliderMovie && (
//         <div
//           className={`lg:h-130 sm:h-200  w-full bg-[url(${sliderMovie.Poster})]  lg:bg-[url(/src/assets/sliderbg.png)]  bg-cover bg-center rounded-2xl `}
//         >
//           <div className="h-full w-full rounded-2xl  flex items-center justify-between px-20 bg-linear-to-t from-background via-transparent via-90% to-background text-text lg:text-5xl sm:text-3xl text:3xl">
//             <div className={`lg:w-1/2 w-full flex flex-col gap-5`}>
//               <h1>{sliderMovie.Title}</h1>
//               <div className="flex gap-20 text-lg text-lightText">
//                 <p>{sliderMovie.Runtime}.</p>
//                 <p>{sliderMovie.Country.split(",")[0]}</p>
//                 <p>{sliderMovie.Year}</p>
//               </div>
//               <p className="text-lg text-lightText">{sliderMovie.Plot}</p>
//               <div className="flex gap-4 items-center">
//                 {/* <a
//               href={`https://vidsrc.to/embed/movie/${sliderMovie.imdbID}`}
//               className="h-14 px-6 py-2 text-xl border-2 border-border text-center no-underline  rounded-3xl"
//             >
//               Watch Now
//             </a> */}
//                 <a
//                   href={`https://vidsrc.to/embed/movie/${sliderMovie.imdbID}`}
//                   target="blank"
//                   className="text-lg mt-2 font-semibold py-3 rounded-4xl px-6 border-2 border-border bg-button2 cursor-grab"
//                 >
//                   Watch Now
//                 </a>
//                 <Link to={`details/${sliderMovie.Title}`}>
//                   <button className="text-lg font-semibold py-3 rounded-4xl px-10 border-2 border-border bg-button cursor-grab">
//                     Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <img
//               className="border-2 lg:flex hidden border-border rounded-2xl"
//               src={sliderMovie.Poster}
//               alt={sliderMovie.Title}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MovieCard;
import { Link } from "react-router-dom";

function MovieCard({ sliderMovie }) {
  return (
    <>
      {sliderMovie && (
        <div
          className="lg:h-130 sm:h-105 h-125 w-full 
          lg:bg-[url(/src/assets/sliderbg.png)] 
          bg-cover bg-center rounded-2xl"
        >
          <div
            className="h-full w-full rounded-2xl flex flex-col lg:flex-row 
            items-center justify-between 
            px-6 sm:px-10 lg:px-20 
            py-8 lg:py-0
            bg-linear-to-t from-background via-transparent via-90% to-background 
            text-text"
          >
            {/* Text Section */}
            <div className="lg:w-1/2 w-full flex flex-col gap-2 lg:gap-5 text-center lg:text-left">
              <img
                className="h-64 lg:hidden object-cover object-top  border-2 border-border rounded-2xl 
              "
                src={sliderMovie.Poster}
                alt={sliderMovie.Title}
              />
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                {sliderMovie.Title}
              </h1>

              <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 text-sm sm:text-base text-lightText">
                <p>{sliderMovie.Runtime}</p>
                <p>{sliderMovie.Country.split(",")[0]}</p>
                <p>{sliderMovie.Year}</p>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-lightText line-clamp-3">
                {sliderMovie.Plot}
              </p>

              {/* Buttons */}
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                <a
                  href={`https://vidsrc.to/embed/movie/${sliderMovie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold py-2 sm:py-3 px-5 sm:px-6 border-2 border-border bg-button2 rounded-4xl"
                >
                  Watch Now
                </a>

                <Link to={`details/${sliderMovie.Title}`}>
                  <button className="text-sm sm:text-base font-semibold py-2 sm:py-3 px-6 sm:px-8 border-2 border-border bg-button rounded-4xl">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            {/* Poster Image */}
            <img
              className="border-2 border-border rounded-2xl 
              hidden lg:block 
              w-65 xl:w-75"
              src={sliderMovie.Poster}
              alt={sliderMovie.Title}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
