import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
function MovieSection({ title, movies }) {
  return (
    <div
      id={
        title === "Latest Movies"
          ? "Trending"
          : title === "Best TV shows"
            ? "TV-Shows"
            : title === "Top Picks"
              ? "Movies"
              : ""
      }
      className=" h-fit w-full lg:px-40 px-2 lg:py-10 py-2 text-text lg:text-3xl text-2xl"
    >
      <h1 className="lg:pb-10 pb-4">{title}...</h1>
      <Swiper
        id="cardContainer"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "28px",
        }}
        loop={movies.length > 5}
        spaceBetween={25}
        slidesPerView={5}
        // centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        observer={true}
        observeParents={true}
        breakpoints={{
          360: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
      >
        {movies.length
          ? movies.map((movie) => (
              <SwiperSlide key={movie.title}>
                <Card movie={movie} />
              </SwiperSlide>
            ))
          : Array.from({ length: 5 }, (_, i) => (
              <SwiperSlide key={i}>
                <SkeletonCard />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default MovieSection;
