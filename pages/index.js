import Hero from "../components/Hero";
import Instafeed from "../components/Instafeed";
import Layout from "../components/Layout";

import { CgArrowLongLeft } from "react-icons/Cg";
import { CgArrowLongRight } from "react-icons/Cg";

import styles from "../styles/home.module.css";
import styles_global from "../styles/about_signature.module.css";

const Home = () => {
  const scroll_to_end = () => {
    var element = document.getElementById("sc");
    element.scrollTo(element.scrollWidth, 0);
  };
  const scroll_to_start = () => {
    var element = document.getElementById("sc");
    element.scrollTo(0, 0);
  };
  return (
    <Layout title="Home">
      <div className="container-fluid">
        {/* slider Section  */}
        <div className="row">
          <div className="col">
            <Hero></Hero>
          </div>
        </div>

        {/* About Section  */}
        <div className={`row my-5 py-5 ${styles_global.about_section}`}>
          <div className="col-md-6 d-lg-block d-flex justify-content-center align-items-center px-0 position-relative ">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/about_photo_1.jpg"
              alt=""
              className={`${styles_global.vertical_img} shadow`}
            />
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              src="/about_photo-15.jpg"
              alt=""
              className={`${styles_global.horizontal_img} d-lg-block d-none`}
            />
          </div>
          <div className={`col-md-6 p-md-4 p-5  ${styles_global.about_desc}`}>
            <div
              className={` d-flex align-items-center w-100 ${styles_global.top_heading_container}`}
            >
              <div className="d-inline-block"></div>
              <h6 className="d-inline-block mt-1 mx-3">ABOUT ME</h6>
            </div>
            <h1 className="my-4 pb-5 me-md-5 text-sm-start text-center">
              I’m Jawad Pervez, a professional photographer based in London.
            </h1>
            <p className="me-sm-2 pe-md-4 me-0 my-4 text-sm-start text-center">
              Mauris accumsan quis purus ut pretium. Suspendisse nunc magna,
              mollis vel pellentesque quis, consectetur eget neque. Phasellus
              posuere lacus lacus. Nunc consectetur, nulla at sagittis aliquam,
              velit diam molestie quam, nec congue orci odio vitae leo.
            </p>
            <p className="text-sm-start text-center">MORE ABOUT ME</p>
          </div>
        </div>

        {/* Portfolio Section  */}
        <div className={`container-fluid ${styles.portfolio}`}>
          <div className="row">
            <div className="col">
              <div
                className={`mx-sm-4 mx-1 d-flex align-items-center w-100 ${styles_global.top_heading_container}`}
              >
                <div className="d-inline-block"></div>
                <h6 className="d-inline-block mt-1 mx-3">MY WORK</h6>
              </div>
              <h1 className="my-3 mx-4">Portfolio</h1>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid my-4 overflow-hidden ${styles.portfolio_container}`}
        >
          <CgArrowLongLeft
            className={`${styles.left_nav} ${styles.navigator_icons} position-absolute top-50`}
            onClick={scroll_to_start}
          />
          <CgArrowLongRight
            className={` ${styles.right_nav} ${styles.navigator_icons} position-absolute  top-50 `}
            onClick={scroll_to_end}
          />
          <ul
            id="sc"
            className="d-flex list-unstyled m-0 p-0 w-100 overflow-scroll"
          >
            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/home/portfolio_1.jpg"
                  alt=""
                  className="position-absolute top-0 w-100 h-100"
                />
                <div
                  className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                >
                  <p className="text-center">Feburary 2022</p>
                  <span>
                    <h4 className="text-center mt-5">Saira Waseem</h4>
                    <h5 className="text-center ">View Project</h5>
                  </span>
                </div>
              </div>
            </li>

            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/home/p1.jpg"
                  alt=""
                  className="position-absolute top-0 w-100 h-100"
                />
                <div
                  className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                >
                  <p className="text-center">Feburary 2022</p>
                  <span>
                    <h4 className="text-center mt-5">Saira Waseem</h4>
                    <h5 className="text-center ">View Project</h5>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/home/portfolio_5.jpg"
                  alt=""
                  className="position-absolute top-0 w-100 h-100"
                />
                <div
                  className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                >
                  <p className="text-center">Feburary 2022</p>
                  <span>
                    <h4 className="text-center mt-5">Saira Waseem</h4>
                    <h5 className="text-center ">View Project</h5>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/home/portfolio_3.jpg"
                  alt=""
                  className="position-absolute top-0 w-100 h-100"
                />
                <div
                  className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                >
                  <p className="text-center">Feburary 2022</p>
                  <span>
                    <h4 className="text-center mt-5">Saira Waseem</h4>
                    <h5 className="text-center ">View Project</h5>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/home/portfolio_4.jpg"
                  alt=""
                  className="position-absolute top-0 w-100 h-100"
                />
                <div
                  className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                >
                  <p className="text-center">Feburary 2022</p>
                  <span>
                    <h4 className="text-center mt-5">Saira Waseem</h4>
                    <h5 className="text-center ">View Project</h5>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Services Section  */}
        {/* Top Heading  */}
        <div
          className={` d-flex align-items-center my-5 px-sm-5 px-1 w-100 ${styles_global.top_heading_container}`}
        >
          <div className="d-inline-block"></div>
          <h6 className="d-inline-block mt-1 mx-3">MY SERVICES</h6>
        </div>
        {/* services 0  */}
        <div
          className={`container-fluid p-0 ${styles.services_section} ${styles.services0} p-sm-5 p-4`}
          data-aos="fade-up"
        >
          <div className="row p-0">
            {/* Image Side  */}
            <div
              className={`col-lg-6 p-0 d-flex flex-column align-items-center  justify-content-center ${styles.img_side}`}
            >
              <div>
                <img src="/p2.jpg" alt="" />
              </div>
              <div className="mb-sm-1 mb-3">
                <p className="text-center p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus dolorum vitae illum? Doloribus debitis minima placeat
                  odit porro pariatur quae!
                </p>
              </div>
            </div>
            {/* Desc Side   */}
            <div
              className={`col-lg-6  border-start  d-flex flex-column justify-content-between align-items-center p-sm-5 p-3 ${styles.desc_side}`}
            >
              {/* Different Services  */}
              <div
                className={`d-flex flex-column justify-content-between align-items-center ${styles.service_cat_1}`}
              >
                <h1 className="text-center ">Engagement Shoots</h1>
                <p className="text-center my-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  maxime deserunt ratione quos ipsam animi? Iure ut numquam aut
                  ea repudiandae natus vitae reiciendis dolor corrupti quos
                  quod, ad quis!
                </p>
                <button className="p-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid p-0 ${styles.services_section} ${styles.services1} my-4  p-sm-5 p-2`}
          data-aos="fade-up"
        >
          <div className="row p-0">
            <div
              className={`col-lg-6 border-secondary border-2 border-start  d-flex flex-column justify-content-between align-items-center p-md-5 p-2 ${styles.desc_side} my-sm-1 my-4`}
            >
              <h1 className="text-center ">Wedding Photography</h1>
              <p className="text-center my-4 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                maxime deserunt ratione quos ipsam animi? Iure ut numquam aut ea
                repudiandae natus vitae reiciendis dolor corrupti quos quod, ad
                quis!
              </p>
              <button className="p-2 mb-sm-1 mb-3">Learn More</button>
            </div>
            <div
              className={`col-lg-6 p-0 d-flex flex-column align-items-center  justify-content-center ${styles.img_side} shadow`}
            >
              <div className="">
                <img src="/p2.jpg" alt="" />
              </div>
              <div className="">
                <p className="text-center p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus dolorum vitae illum? Doloribus debitis minima placeat
                  odit porro pariatur quae!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Insta feed Section  */}
        <Instafeed></Instafeed>
      </div>
    </Layout>
  );
};
export default Home;
