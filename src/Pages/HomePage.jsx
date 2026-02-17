import { useContext } from "react";
import HeroSection from "../Component/homepage/HeroSection";
import MovieSection from "../Component/homepage/MovieSection";
import { DataContext } from "../DataContext";

function HomePage() {
  const { topPicks, tvShows, latestMovies } = useContext(DataContext);
  return (
    <div className="pb-60">
      <HeroSection />
      <MovieSection title={"Latest Movies"} movies={latestMovies} />
      <MovieSection title={"Top Picks"} movies={topPicks} />
      <MovieSection title={"Best TV shows"} movies={tvShows} />
    </div>
  );
}

export default HomePage;
