/* eslint-disable @next/next/no-img-element */

// components
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// css module
import style from '../styles/Hero.module.css';
// json objects
import SliderImages from '../website-data/home/sliderImages';

const Slider = () => {
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
      setIndex(sliderIndex >= SliderImages.length ? 1 : sliderIndex + 1);
    }, 10000);
    return () => {
      resetInterval();
    };
  }, [sliderIndex]);

  return (
    <div
      className="container shadow p-0 position-relative"
      id={style.hero_container}
    >
      {/* Slider Navigation  */}
      <ul className="position-absolute z-1 mb-4">
        {SliderImages.map((depr, index) => {
          return (
            <div key={index}>
              <li
                className="text-center"
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                {index + 1}
              </li>
              <li
                className={`text-center ${style.navigator_bar} ${
                  sliderIndex === index + 1 ? '' : style.navigator_bar_active
                }`}
              >
                |
              </li>
            </div>
          );
        })}
      </ul>
      {/* slider  */}
      {SliderImages.map((slideImage, index) => {
        return (
          <div
            key={index}
            className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
              sliderIndex === index + 1 ? style.active_slide : ''
            }`}
          >
            <div
              className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
            ></div>
            <Image
              src={slideImage.img}
              alt="slider image"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657084474/studioink-media-assects/images/home/slider/slide1_k1vyvj.jpg"
            />
            <div
              className={`${style.desc_container} ${
                sliderIndex === index + 1 ? style.desc_anim : ''
              } position-absolute mx-5`}
            >
              <h1 className="mx-2">{slideImage.title}</h1>
              <p className=" px-2 mb-2">{slideImage.desc}</p>
              <Link href={`/${slideImage.slug}`}>
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
