import Hero from "../components/Hero";
import styles from "../styles/home.module.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        {/* slider Section  */}
        <div className="row">
          <div className="col">
            <Hero></Hero>
          </div>
        </div>
        {/* About Section  */}
        <div className={`row my-5 py-5 ${styles.about_section}`}>
          <div className="col-md-6 d-lg-block d-flex justify-content-center align-items-center px-0 position-relative ">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/about_photo_1.jpg"
              alt=""
              className={`${styles.vertical_img} shadow`}
            />
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              src="/about_photo-15.jpg"
              alt=""
              className={`${styles.horizontal_img} d-lg-block d-none`}
            />
          </div>
          <div className={`col-md-6 p-md-4 p-5  ${styles.about_desc}`}>
            <div
              className={` d-flex align-items-center w-100 ${styles.top_heading_container}`}
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
                className={`mx-sm-4 mx-1 d-flex align-items-center w-100 ${styles.top_heading_container}`}
              >
                <div className="d-inline-block"></div>
                <h6 className="d-inline-block mt-1 mx-3">MY WORK</h6>
              </div>
              <h1 className="my-3 mx-4">Portfolio</h1>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid my-4 overflow-scroll ${styles.portfolio_container}`}
        >
          <ul className="d-flex list-unstyled m-1">
            <li data-aos="zoom-in">
              <div className={`shadow mx-3 ${styles.boxes} position-relative`}>
                <img
                  src="/p2.jpg"
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
                  src="/p2.jpg"
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
                  src="/p2.jpg"
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
                  src="/p2.jpg"
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
                  src="/p2.jpg"
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
                  src="/p2.jpg"
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
                  src="/p1.jpg"
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
        <div
          className={` d-flex align-items-center my-5 px-sm-5 px-1 w-100 ${styles.top_heading_container}`}
        >
          <div className="d-inline-block"></div>
          <h6 className="d-inline-block mt-1 mx-3">MY SERVICES</h6>
        </div>
        <div
          className={`container-fluid p-0 ${styles.services_section} ${styles.services0} p-sm-5 p-4`}
          data-aos="fade-up"
        >
          <div className="row p-0">
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
            <div
              className={`col-lg-6  border-start  d-flex flex-column justify-content-between align-items-center p-sm-5 p-3 ${styles.desc_side}`}
            >
              <h1 className="text-center ">Engagement Shoots</h1>
              <p className="text-center my-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                maxime deserunt ratione quos ipsam animi? Iure ut numquam aut ea
                repudiandae natus vitae reiciendis dolor corrupti quos quod, ad
                quis!
              </p>
              <button className="p-2">Learn More</button>
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
        {/* Instagram Feed   */}
        <div className={`container my-5 ${styles.insta_feed}`}>
          <div className="row">
            <div
              className={`col d-flex justify-content-center align-items-center ${styles.insta_heading}`}
            >
              <div className="d-inline-block"></div>
              <h4 className="d-inline-block mx-4 text-center">
                INSTAGRAM FEED
              </h4>
              <div className="d-inline-block"></div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              commodi minima repellat distinctio eum necessitatibus ullam
              corporis perferendis. Soluta ipsam sequi sapiente quasi, numquam
              cumque vero, cum ea debitis ipsa quia eius consequuntur incidunt
              quis, inventore earum accusamus tenetur ratione dolor libero? Ab
              eligendi aspernatur ratione laboriosam hic enim voluptatibus!
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center p-4">
              <button className="border-0 py-2 px-4">FOLLOW ME</button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col d-flex justify-content-center">
              <div className={styles.ending_bar}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
