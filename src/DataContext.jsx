import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState();
  const [sliderMovies, setSliderMovies] = useState([]);
  const KEY = "27e203c1";
  const query = "dangal";

  const sliderMoviesArr = [
    "dhurandhar",
    "fight club",
    "superman",
    "interstellar",
    "american psycho",
    "dangal",
  ];

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&t=${query}`,
      );
      const data = await res.json();
      console.log(data);
    }
    fetchMovies();
  }, [query]);

  useEffect(() => {
    async function fetchSliderMovies() {
      try {
        const results = await Promise.all(
          sliderMoviesArr.map(async (movie) => {
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=${KEY}&t=${movie}`,
            );
            return res.json();
          }),
        );

        setSliderMovies(results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchSliderMovies();
  }, []);
  console.log(sliderMovies);
  return (
    <DataContext.Provider value={{ movies, sliderMovies, setMovies }}>
      {children}
    </DataContext.Provider>
  );
}
export { DataProvider, DataContext };
