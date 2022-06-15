import React, { useState, useEffect } from "react";
import style from "../styles/Hero.module.css";
const Hero = () => {
  const [curr, setCurr] = useState(1);
  const nextSlide = (e) => {
    console.log();
    setCurr(e.target.attributes["1"].value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(curr);
      if (curr > 3 || curr == 3) {
        console.log(`inside start condition`);
        setCurr(1);
      } else {
        setCurr((curr) => curr + 1);
        console.log(`After incre :${curr}`);
      }
    }, 3000);
  }, []);

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
        <li
          className={`text-center ${style.navigator_bar} ${
            curr == 1 ? "" : style.navigator_bar_active
          }`}
        >
          |
        </li>
        <li className="text-center" data_id="2" onClick={nextSlide}>
          2
        </li>
        <li
          className={`text-center ${style.navigator_bar} ${
            curr == 2 ? "" : style.navigator_bar_active
          }`}
        >
          |
        </li>
        <li className="text-center" data_id="3" onClick={nextSlide}>
          3
        </li>
        <li
          className={`text-center ${style.navigator_bar} ${
            curr == 3 ? "" : style.navigator_bar_active
          }`}
        >
          |
        </li>
      </ul>
      {/* slider 1  */}
      <div
        id="slide1"
        className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
          curr == 1 ? style.active_slide : ""
        }`}
      >
        {/* Gradient Effect  */}
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        {/* Image  */}
        <img src="/slide_1.jpg" alt="" className="w-100 h-100 top-0" />
        {/* Description */}
        <div
          className={`${style.desc_container} ${
            curr == 1 ? style.desc_anim : ""
          } position-absolute mx-5`}
        >
          <h1 className="">Wedding Photogrpahy</h1>
          <p className=" px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            repellat.
          </p>
          <button className="p-2 mx-2">Learn More</button>
        </div>
      </div>
      {/* slide 2 */}
      <div
        id="slide2"
        className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
          curr == 2 ? style.active_slide : ""
        }`}
      >
        {/* Gradient Effect  */}
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        {/* Image  */}
        <img src="/slide_2.jpg" alt="" className="w-100 h-100 top-0" />
        {/* Description */}
        <div
          className={`${style.desc_container} ${
            curr == 2 ? style.desc_anim : ""
          } position-absolute mx-5`}
        >
          <h1 className="">Night-Life Photogrpahy</h1>
          <p className=" px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            repellat.
          </p>
          <button className="p-2 mx-2">Learn More</button>
        </div>
      </div>
      {/* slide 3  */}
      <div
        id="slide3"
        className={`${style.__slider} w-100 h-100 position-absolute top-0 ${
          curr == 3 ? style.active_slide : ""
        }`}
      >
        {/* Gradient Effect  */}
        <div
          className={`w-100 h-100 position-absolute top-0 ${style.img_gradient}`}
        ></div>
        {/* Image  */}
        <img src="/black__bg.jpg" alt="" className="w-100 h-100 top-0" />
        {/* Description */}
        <div
          className={`${style.desc_container} ${
            curr == 3 ? style.desc_anim : ""
          } position-absolute mx-5`}
        >
          <h1 className="">Engagement-Life Photogrpahy</h1>
          <p className=" px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            repellat.
          </p>
          <button className="p-2 mx-2">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
