import styles_global from "../styles/about_signature.module.css";
import styles from "../styles/about.module.css";

import { MdCameraFront } from "react-icons/Md";
import { BsImage } from "react-icons/Bs";
import { BiChalkboard } from "react-icons/Bi";
import { GiLinkedRings } from "react-icons/Gi";

const About = () => {
  return (
    <div className="container-fluid">
      {/* About Section  */}
      <div
        className={`row ${styles_global.about_section}`}
        style={{ height: "auto !important" }}
      >
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
        <div className={`col-md-6 p-md-4 p-4  ${styles_global.about_desc}`}>
          <div
            className={` d-flex align-items-center w-100 ${styles_global.top_heading_container}`}
          >
            <div className="d-inline-block"></div>
            <h6 className="d-inline-block mt-1 mx-3">WORK WITH ME</h6>
          </div>
          <h1 className="my-4 pb-5 me-md-5 text-sm-start text-center">
            Hi! My name is Jenna Doe, I’m a photographer.
          </h1>
          <p className="me-sm-5 pe-md-4 me-0 my-4 text-sm-start text-center">
            Nunc pulvinar sagittis turpis, eleifend ultrices magna pharetra
            vitae. Vivamus in metus ligula. Cras vitae dolor vel tellus laoreet
            mattis. Donec quis aliquet lorem, ac dapibus velit.
          </p>
          <p className="me-sm-5 text-sm-start text-center">
            Mauris accumsan quis purus ut pretium. Suspendisse nunc magna,
            mollis vel pellentesque quis, consectetur eget neque. Phasellus
            posuere lacus lacus. Nunc consectetur, nulla at sagittis aliquam,
            velit diam molestie quam, nec congue orci odio vitae leo. Praesent
            id purus neque. Integer ultricies, quam vel sagittis dictum, risus
            felis placerat erat, ac volutpat orci lacus vel velit.
          </p>
        </div>
      </div>
      {/* Skills Section  */}
      <div className={`row `}>
        <div className={`col p-md-4 p-5  ${styles_global.about_desc}`}>
          <div
            className={` d-flex align-items-center justify-content-center my-5 w-100 ${styles_global.top_heading_container}`}
          >
            <div className="d-inline-block"></div>
            <h6 className="d-inline-block mx-3">MY SKILLSET</h6>
            <div className="d-inline-block"></div>
          </div>

          <div className="container">
            <div className="row  p-3 d-flex justify-content-center align-items-center">
              <div
                className={`col-lg-3 col-sm-6 bg-body shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <MdCameraFront className={styles.icons} />
                <h5 className="text-center mt-2">Portrait Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
              <div
                className={`col-lg-3 col-sm-6 mx-4 bg-body shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <GiLinkedRings className={styles.icons} />
                <h5 className="text-center mt-2">Wedding Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
              <div
                className={`col-lg-3 col-sm-6 bg-body shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <BsImage className={styles.icons} />
                <h5 className="text-center mt-2">Landscape Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
            </div>
            <div className="row  p-3 d-flex justify-content-center align-items-center">
              <div
                className={`col-3 bg-body shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <MdCameraFront className={styles.icons} />
                <h5 className="text-center mt-2">Portrait Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
              <div
                className={`col-lg-3 col-sm-6 bg-body mx-4 shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <GiLinkedRings className={styles.icons} />
                <h5 className="text-center mt-2">Wedding Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
              <div
                className={`col-lg-3 col-sm-6 bg-body shadow d-flex flex-column justify-content-center align-items-center ${styles.icon_boxes}`}
              >
                <BsImage className={styles.icons} />
                <h5 className="text-center mt-2">Landscape Photography</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe, commodi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Project  */}
    </div>
  );
};
export default About;
