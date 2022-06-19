import Layout from "../components/Layout";
// Import Css Module
import styles from "../styles/wedding.module.css";

const Wedding = () => {
  return (
    <Layout title="Wedding">
      <div className={`container-fluid  ${styles.weddingContainer}`}>
        {/* Grid 1  */}
        <div className="row">
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <img
              src="/assects/img/packages/1.jpg"
              alt=""
              className="position-absolute top-0 start-0"
            />

            <div className={`${styles.transparent}`}></div>
          </div>
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <div className="rates w-100 h-100 flex-column justify-content-center align-items-center d-md-none d-flex">
              <h6 className="text-center">$500</h6>
              <h4 className="text-center">- INCLUDES -</h4>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
            </div>
            <img
              src="/assects/img/packages/1.jpg"
              alt=""
              className="position-absolute top-0 start-0 d-md-block d-none"
            />

            <div className={`${styles.transparent} d-md-flex d-none`}>
              <h1>BRONZE</h1>
            </div>
          </div>
        </div>

        {/* Heading  */}
        <div className="row ">
          <div
            className={`col p-5 d-flex flex-column justify-content-center align-items-center ${styles.headingContainer}`}
          >
            <h1 className="text-center">Wedding Photography</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Wedding;
