import React, { useState } from "react";
import style from "../styles/Hero.module.css";
const Hero = () => {
  const [curr, setCurr] = useState(1);
  const nextSlide = (e) => {
    setCurr(e.target["__reactProps$beulwqzkll9"].data_id);
  };
  const abc = () => {
    console.log(`first`);
  };
  return (
    <div
      className="container shadow p-0 position-relative"
      id={style.hero_container}
    >
      {/* slider navigation  */}
      <ul className="position-absolute z-1">
        <li className="text-center" data_id="1" onClick={nextSlide}>
          1
        </li>
        <li className="text-center">|</li>
        <li className="text-center" data_id="2" onClick={nextSlide}>
          2
        </li>
        {/* <li className="text-center">|</li> */}
        <li className="text-center" data_id="3" onClick={nextSlide}>
          3
        </li>
      </ul>
      {/* slider 1  */}
      <div
        id="slide1"
        className={`${style.__slider} w-100 h-100  ${
          curr == 1 ? style.active_slide : ""
        }`}
      >
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        <img src="/slide_1.jpg" alt="" className="w-100 h-100 top-0" />
        <h1 className={`position-absolute mx-5 ${style.haa}`}>
          Wedding Photography
        </h1>
        <p className="position-absolute mx-5 px-2" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          repellat.
        </p>
        <button className="position-absolute mx-5" onClick={abc}>
          Learn More
        </button>
      </div>
      {/* slide 2 */}
      <div
        id="slide2"
        className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
          curr == 2 ? style.active_slide : ""
        }`}
      >
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        <img src="/slide_2.jpg" alt="" className="w-100 h-100 top-0" />
        <h1 className="position-absolute mx-5">Night-Life Photogrpahy</h1>
        <p className="position-absolute mx-5 px-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          repellat.
        </p>
        <button className="position-absolute mx-5">Learn More</button>
      </div>
      {/* slide 3  */}
      <div
        id="slide3"
        className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
          curr == 3 ? style.active_slide : ""
        }`}
      >
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        <img src="/black__bg.jpg" alt="" className="w-100 h-100 top-0" />
        <h1 className="position-absolute mx-5">Engagement Shoots</h1>
        <p className="position-absolute mx-5 px-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          repellat.
        </p>
        <button className="position-absolute mx-5">Learn More</button>
      </div>
    </div>
  );
};
export default Hero;
