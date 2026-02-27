import { useContext } from "react";
import HeroSection from "../Component/homepage/HeroSection";
import MovieSection from "../Component/homepage/MovieSection";
import { DataContext } from "../DataContext";
import SearchPage from "../Component/common/SearchPage";

function HomePage() {
  const {
    topPicks,
    tvShows,
    latestMovies,
    oscarMovies,
    animeSeries,
    showSearch,
  } = useContext(DataContext);
  return (
    <div className="bg-background ">
      {showSearch && <SearchPage />}
      <HeroSection />
      <MovieSection title={"Latest Movies"} movies={latestMovies} />
      <MovieSection title={"Top Picks"} movies={topPicks} />
      <MovieSection title={"Best TV shows"} movies={tvShows} />
      <MovieSection title={"Best Oscar Movies"} movies={oscarMovies} />
      <MovieSection title={"Popular Anime Movies"} movies={animeSeries} />
    </div>
  );
}

export default HomePage;
