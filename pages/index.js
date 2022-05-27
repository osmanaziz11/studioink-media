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
              src="/about_photo_1.jpg"
              alt=""
              className={`${styles.vertical_img} shadow`}
            />
            <img
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
            <h1 className="my-4 pb-4 ">
              I’m Jawad Pervez, a professional photographer based in London.
            </h1>
            <p className="me-1">
              Mauris accumsan quis purus ut pretium. Suspendisse nunc magna,
              mollis vel pellentesque quis, consectetur eget neque. Phasellus
              posuere lacus lacus. Nunc consectetur, nulla at sagittis aliquam,
              velit diam molestie quam, nec congue orci odio vitae leo.
            </p>
            <p>MORE ABOUT ME</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
