/* eslint-disable @next/next/no-img-element */
// Components
import Link from 'next/link';

// Custom Components
import Layout from '../../components/Layout';

// Import Css Modules
import style from '../../styles/gallery.module.css';

// Json Objects
import Albums from '../../website-data/gallery/albums';

const Gallery = () => {
  return (
    <Layout title="Gallery">
      <div className={style.galleryContainer}>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center align-items-center">
            <div className={` ${style.bar}`}></div>
            <h5 className="mx-3 my-2 globalPgeSubHeading">GALLERIES</h5>
            <div className={` ${style.bar}`}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className={`text-center my-2 globalPgeHeading`}>
              Explore my work
            </h1>
          </div>
        </div>
        {/* Main Container   */}
        <div className="row my-5">
          <div className="col">
            <div className="container p-0">
              <div className="row">
                {Albums.map((album, index) => {
                  return (
                    <div
                      className="col-xl-3 col-md-4 col-sm-6 mb-3 "
                      key={index}
                    >
                      <Link href={`/gallery/${album.slug}`}>
                        {/* Single Prodcut Item  */}
                        <div className={`${style.items} shadow `}>
                          {/* item Thumbnail */}
                          <div
                            className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                          >
                            <img src={album.thumbnail} alt="" />

                            <div
                              className={`w-100 h-100 position-absolute top-0 start-0 ${style.transition} d-flex justify-content-end flex-column align-items-center`}
                            >
                              <h6>{album.title}</h6>
                              <p>{`- ${album.photos} Photos -`}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
