import styles from "../styles/instafeed.module.css";
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
          <div className="col p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi minima repellat distinctio eum necessitatibus ullam corporis
            perferendis. Soluta ipsam sequi sapiente quasi, numquam cumque vero,
            cum ea debitis ipsa quia eius consequuntur incidunt quis, inventore
            earum accusamus tenetur ratione dolor libero? Ab eligendi aspernatur
            ratione laboriosam hic enim voluptatibus!
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
