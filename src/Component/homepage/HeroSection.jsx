import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { DataContext } from "../../DataContext";
import { useContext } from "react";
import MovieCard from "./MovieCard";
function HeroSection() {
  const { sliderMovies } = useContext(DataContext);
  return (
    <div>
      <Swiper
        id="cardContainer"
        style={{
          padding: "40px 0px",

          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "28px",
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        loopAdditionalSlides={1}
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
          <p className="text-text">loading</p>
        )}
      </Swiper>
    </div>
  );
}

export default HeroSection;
