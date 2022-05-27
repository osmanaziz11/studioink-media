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
                className={`mx-4 d-flex align-items-center w-100 ${styles.top_heading_container}`}
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
      </div>
    </>
  );
};
export default Home;
