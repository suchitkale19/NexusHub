// import { createContext, useContext, useEffect, useState } from "react";
// import { DataContext } from "./DataContext";

// const MovieContext = createContext();
// const { KEY } = useContext(DataContext);
// function MovieProvider({ children }) {
//   const [movie, setMovie] = useState();
//   const [detailedMovie, setDetailedMovie] = useState(null);
//   useEffect(() => {
//     async function fetchMovies() {
//       const res = await fetch(
//         `http://www.omdbapi.com/?apikey=${KEY}&t=${movie}`,
//       );
//       const data = await res.json();
//       setDetailedMovie(data);
//       console.log(data);
//     }
//     fetchMovies();
//   }, [movie]);
//   return (
//     <MovieContext.Provider value={{ movie, setMovie, detailedMovie }}>
//       {children}
//     </MovieContext.Provider>
//   );
// }
// export { MovieContext, MovieProvider };
