import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { DataContext } from "../../DataContext";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";
function HeroSection() {
  const { sliderMovies } = useContext(DataContext);
  return (
    <>
      <Swiper
        key={sliderMovies.length}
        id="cardContainer"
        style={{
          padding: "0px 200px",
          display: "flex",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#666",
          "--swiper-navigation-size": "28px",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-width": "40px",
          "--swiper-pagination-bullet-border-radius": "10px",
          "--swiper-pagination-bullet-height": "5px",
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // loopAdditionalSlides={1}
        observer={true}
        observeParents={true}
      >
        {sliderMovies.length ? (
          sliderMovies.map((sliderMovie) => (
            <SwiperSlide key={sliderMovie.title}>
              <MovieCard sliderMovie={sliderMovie} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <SkeletonMovieCard />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default HeroSection;
