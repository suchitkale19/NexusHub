import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";
function MovieSection({ title, movies }) {
  return (
    <div className=" h-fit w-full px-40 text-text text-3xl">
      <h1 className="py-10">{title}...</h1>
      <Swiper
        id="cardContainer"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "28px",
        }}
        loop={false}
        spaceBetween={25}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        observer={true}
        observeParents={true}
      >
        {movies.length ? (
          movies.map((movie) => (
            <SwiperSlide key={movie.title}>
              <Card movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-text">loading</p>
        )}
      </Swiper>
    </div>
  );
}

export default MovieSection;
