import { useContext } from "react";
import HeroSection from "../Component/homepage/HeroSection";
import MovieSection from "../Component/homepage/MovieSection";
import { DataContext } from "../DataContext";

function HomePage() {
  const { topPicks, tvShows, latestMovies, oscarMovies, animeSeries } =
    useContext(DataContext);
  return (
    <div className="bg-background">
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
