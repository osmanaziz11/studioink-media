/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// import css module
import style from "../styles/Hero.module.css";

const Slider = () => {
  const sliderImages = [
    {
      img: "/slide_1.jpg",
      title: "Wedding Photography",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,repellat.",
      slug: "wedding",
    },
    {
      img: "/slide_2.jpg",
      title: "Engagement Photography",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,repellat.",
      slug: "wedding",
    },
    {
      img: "/slide_2.jpg",
      title: "Food Photography",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,repellat.",
      slug: "wedding",
    },
    {
      img: "/slide_1.jpg",
      title: "Street Photography",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,repellat.",
      slug: "wedding",
    },
  ];
  const [sliderIndex, setIndex] = useState(1);
  const timeout = useRef(null);
  function resetInterval() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }
  useEffect(() => {
    resetInterval();
    timeout.current = setTimeout(() => {
      setIndex(sliderIndex >= sliderImages.length ? 1 : sliderIndex + 1);
    }, 10000);
    return () => {
      resetInterval();
    };
  }, [sliderImages.length, sliderIndex]);

  return (
    <div
      className="container shadow p-0 position-relative"
      id={style.hero_container}
    >
      {/* Slider Navigation  */}
      <ul className="position-absolute z-1">
        {sliderImages.map((depr, index) => {
          return (
            <>
              <li
                className="text-center"
                key={index}
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                {index + 1}
              </li>
              <li
                className={`text-center ${style.navigator_bar} ${
                  sliderIndex === index + 1 ? "" : style.navigator_bar_active
                }`}
              >
                |
              </li>
            </>
          );
        })}
      </ul>
      {/* slider  */}
      {sliderImages.map((slideImage, index) => {
        return (
          <div
            key={index}
            className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
              sliderIndex === index + 1 ? style.active_slide : ""
            }`}
          >
            <div
              className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
            ></div>
            <img src={slideImage.img} alt="" className="w-100 h-100 top-0" />
            <div
              className={`${style.desc_container} ${
                sliderIndex === index + 1 ? style.desc_anim : ""
              } position-absolute mx-5`}
            >
              <h1 className="mx-2">{slideImage.title}</h1>
              <p className=" px-2 mb-2">{slideImage.desc}</p>
              <Link href={`/portfolio`}>
                <button className="p-2 mx-2">Learn More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Slider;

{
  /* slider navigation  */
}
