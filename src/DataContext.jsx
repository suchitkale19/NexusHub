import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const KEY = "27e203c1";
  const query = "dhurandhar";
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
      );
      const data = await res.json();
      console.log(data);
    }
    fetchMovies();
  }, [query]);
  return (
    <DataContext.Provider value={{ movies, setMovies }}>
      {children}
    </DataContext.Provider>
  );
}
export { DataProvider, DataContext };
