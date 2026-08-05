"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

const renders = [
  "render-01.jpg",
  "render-02.jpg",
  "render-03.jpg",
  "render-04.jpg",
  "render-05.jpg",
  "render-06.jpg",
  "render-07.jpg",
  "render-08.jpg",
];

export default function RenderGallery() {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Mousewheel]}
        direction="horizontal"
        mousewheel={true}
        slidesPerView={1}
        speed={900}
        loop={true}
        className="h-full"
      >
        {renders.map((render) => (
          <SwiperSlide key={render}>
            <img
              src={`/renders/${render}`}
              alt={render}
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}