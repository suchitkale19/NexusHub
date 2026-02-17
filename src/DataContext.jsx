import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState();
  const [sliderMovies, setSliderMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [tvShows, setTvshows] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [oscarMovies, setOscarMovies] = useState([]);
  const [animeSeries, setAnimeSeries] = useState([]);
  const KEY = "27e203c1";
  const query = "12th fail  ";

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
    const fetchMovies = async (arr, setter) => {
      try {
        const results = await Promise.all(
          arr.map((movie) =>
            fetch(`https://www.omdbapi.com/?apikey=${KEY}&t=${movie}`).then(
              (res) => res.json(),
            ),
          ),
        );
        setter(results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies(
      [
        "dhurandhar",
        "fight club",
        "superman",
        "interstellar",
        "american psycho",
        "dangal",
        "Ne Zha 2",
      ],
      setSliderMovies,
    );

    fetchMovies(
      [
        "avatar fire and ash",
        "mission impossible the final reckoning",
        "Ne Zha 2",
        "Jurassic World: Rebirth",
        "a minecraft movie",
        "Mardaani 3",
        "Superman",
        "Zootopia 2",
        "dhurandhar",
      ],
      setLatestMovies,
    );

    fetchMovies(
      [
        "Avengers: Endgame",
        "the dark knight",
        "Titanic",
        "Spider-Man: No Way Home",
        "Spider-Man: Across the Spider-Verse",
        "Avatar",
        "Inside Out 2",
        "12th fail",
        "3 idiots",
      ],
      setTopPicks,
    );
    fetchMovies(
      [
        "daredevil",
        "breaking bad",
        "the boys",
        "dexter",
        "stranger things",
        "Squid game",
        // "avatar the last airbender",
        "game of thrones",
        "suits",
        "better call saul",
        "the office",
      ],
      setTvshows,
    );
    fetchMovies(
      [
        "Ben-hur",
        "The Lord of the Rings: The Return of the King",
        "Schindler's List",
        "Gravity",
        "Oppenheimer",
        "West Side Story",
        "Slumdog Millionaire",
        "Gandhi",
        "The Last Emperor",
        "gigi",
      ],
      setOscarMovies,
    );
    fetchMovies(
      [
        "one piece",
        "jujutsu kaisen",
        "hunter x hunter",
        "dragon ball z",
        "black clover",
        "avatar the last airbender",
        "death note",
        "one punch man",
        "naruto",
        "blue lock",
      ],
      setAnimeSeries,
    );
  }, []);

  console.log(sliderMovies);
  return (
    <DataContext.Provider
      value={{
        movies,
        topPicks,
        tvShows,
        oscarMovies,
        latestMovies,
        sliderMovies,
        animeSeries,
        setMovies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataProvider, DataContext };
