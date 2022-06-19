import Layout from "../../components/Layout";
// Import Css Module
import styles from "../../styles/packages.module.css";

const Packages = () => {
  return (
    <Layout title="Packages">
      <div className={styles.packageContainer}>
        {/* Heading  */}
        <div className="row my-5">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">Pricing Guide</h1>
            <div
              style={{
                width: "55px",
                backgroundColor: "#222222",
                height: "4px",
                borderRadius: "10px",
              }}
              className="mt-3"
            ></div>
          </div>
        </div>

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

            <div className={`${styles.transparent}`}>
              <h1>BRONZE</h1>
            </div>
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
        {/* Pricing  */}
        <div className="row my-4">
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <div className="rates w-100 h-100 flex-column justify-content d-md-flex d-none position-absolute top-0 start-0">
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
              className="position-absolute top-0 start-0 d-md-none d-block"
            />

            <div className={`${styles.transparent} d-md-none d-flex`}>
              <h1>BRONZE</h1>
            </div>
          </div>
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <div className="rates w-100 h-100 flex-column justify-content-md-start justify-content-center align-items-center d-flex position-absolute top-0 start-0">
              <h6 className="text-center">$500</h6>
              <h4 className="text-center">- INCLUDES -</h4>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="row">
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <img
              src="/assects/img/packages/1.jpg"
              alt=""
              className="position-absolute top-0 start-0"
            />

            <div className={`${styles.transparent}`}>
              <h1>BRONZE</h1>
            </div>
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
        {/* Pricing  */}
        <div className="row my-4">
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <div className="rates w-100 h-100 flex-column justify-content d-md-flex d-none position-absolute top-0 start-0">
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
              className="position-absolute top-0 start-0 d-md-none d-block"
            />

            <div className={`${styles.transparent} d-md-none d-flex`}>
              <h1>BRONZE</h1>
            </div>
          </div>
          <div
            className={`col-md-6 ${styles.imgContainer} position-relative p-0`}
          >
            <div className="rates w-100 h-100 flex-column justify-content-md-start justify-content-center align-items-center d-flex position-absolute top-0 start-0">
              <h6 className="text-center">$500</h6>
              <h4 className="text-center">- INCLUDES -</h4>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
              <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Packages;
