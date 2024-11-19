import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import caru from '../../assets/caru.jpg';
import rd from '../../assets/rd.jpg';
import med from '../../assets/med.jpg';
function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center flex-grow px-8 text-center bg-[#FDFDFD] mt-12">
      <h2 className="text-4xl font-semibold text-[#00747C] mb-4">
        BIENVENIDO A PILLCARE
      </h2>
      <p className="text-lg text-[#202022] max-w-2xl mb-8">
        La plataforma diseñada para mejorar la salud y el bienestar de las
        personas mayores, garantizando que nunca olviden su medicación.
      </p>

      <div className="w-full max-w-3xl mb-8">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg"
        >
          <SwiperSlide>
            <img src={med} alt="Imagen 1" className="rounded-xl shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rd} alt="Imagen 2" className="rounded-xl shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={caru} alt="Imagen 3" className="rounded-xl shadow-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;