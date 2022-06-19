// Import Components
import Layout from "../../components/Layout";

// Import Css Modules
import style from "../../styles/gallery.module.css";

const Gallery = () => {
  return (
    <Layout title="Gallery">
      <div className={style.galleryContainer}>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center align-items-center">
            <div className={` ${style.bar}`}></div>
            <h5 className="mx-3 my-2">GALLERIES</h5>
            <div className={` ${style.bar}`}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className={`text-center my-2`}>Explore my work</h1>
          </div>
        </div>
        {/* Main Container   */}
        <div className="row my-5">
          <div className="col">
            <div className="container p-0">
              <div className="row">
                <div className="col-xl-3 col-md-4 col-sm-6 mb-3 ">
                  {/* Single Prodcut Item  */}
                  <div className={`${style.items} shadow `}>
                    {/* item Thumbnail */}
                    <div
                      className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                    >
                      <img src="/assects/img/gallery/3.jpg" alt="" />
                      <img src="/assects/img/gallery/2.jpg" alt="" />
                      <div
                        className={`w-100 h-100 position-absolute top-0 start-0 ${style.transition} d-flex justify-content-end flex-column align-items-center`}
                      >
                        <h6>Stories of Egypet</h6>
                        <p>- 42 Photos -</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6 mb-3 ">
                  {/* Single Prodcut Item  */}
                  <div className={`${style.items} shadow `}>
                    {/* item Thumbnail */}
                    <div
                      className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                    >
                      <img src="/assects/img/gallery/3.jpg" alt="" />
                      <img src="/assects/img/gallery/2.jpg" alt="" />
                      <div
                        className={`w-100 h-100 position-absolute top-0 start-0 ${style.transition} d-flex justify-content-end flex-column align-items-center`}
                      >
                        <h6>Stories of Egypet</h6>
                        <p>- 42 Photos -</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6 mb-3 ">
                  {/* Single Prodcut Item  */}
                  <div className={`${style.items} shadow `}>
                    {/* item Thumbnail */}
                    <div
                      className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                    >
                      <img src="/assects/img/gallery/3.jpg" alt="" />
                      <img src="/assects/img/gallery/5.jpg" alt="" />
                      <div
                        className={`w-100 h-100 position-absolute top-0 start-0 ${style.transition} d-flex justify-content-end flex-column align-items-center`}
                      >
                        <h6>Stories of Egypet</h6>
                        <p>- 42 Photos -</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6 mb-3 ">
                  {/* Single Prodcut Item  */}
                  <div className={`${style.items} shadow `}>
                    {/* item Thumbnail */}
                    <div
                      className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                    >
                      <img src="/assects/img/gallery/3.jpg" alt="" />
                      <img src="/assects/img/gallery/2.jpg" alt="" />
                      <div
                        className={`w-100 h-100 position-absolute top-0 start-0 ${style.transition} d-flex justify-content-end flex-column align-items-center`}
                      >
                        <h6>Stories of Egypet</h6>
                        <p>- 42 Photos -</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Gallery;
