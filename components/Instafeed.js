import styles from "../styles/instafeed.module.css";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
const Instafeed = () => {
  return (
    <>
      {/* Instagram Feed   */}
      <div className={`container my-5 ${styles.insta_feed}`}>
        <div className="row">
          <div
            className={`col d-flex justify-content-center align-items-center ${styles.insta_heading}`}
          >
            <div className="d-inline-block"></div>
            <h4 className="d-inline-block mx-4 text-center">INSTAGRAM FEED</h4>
            <div className="d-inline-block"></div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col p-3" data-aos="fade-up" data-aos-duration="2000">
            <InstagramFeed
              token="IGQVJYbFFaVjhuMDhYVVktcUV3Q1k1ZAnlHVy1yOGotZAEl0NUNjaUZAjVHdoLS1GOEw0QzM3V1dfUTlGSnJxUmk1bXJtbVZAIaWstNkk3cWFjNlJNUnltYVY3N1RaYkVTSWlHVnJlMzhoUkp1V3dyeDZARRgZDZD"
              counter="3"
            />
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
    </>
  );
};
export default Instafeed;
