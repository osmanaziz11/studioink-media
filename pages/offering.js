import Layout from '../components/Layout';
import styles from '../styles/offering.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

const Offering = () => {
  return (
    <Layout title="What we offer">
      <div className={`container-fluid ${styles.mainContainer} p-0`}>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center align-items-center">
            <h5 className="mx-3 my-2 globalPgeSubHeading">- Our Offering -</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className={`text-center my-2 globalPgeHeading`}>
              Explore what we offer
            </h1>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <div className="container">
              {/* One Container  */}
              <div className={`row ${styles.OneContainer}`} data-aos="fade-up">
                <div className="col-md-6 px-sm-4">
                  <h6 className={`${styles.numbering} `}>ONE</h6>
                  <h3 className={`${styles.serviceTitle} mb-4 `}>Weddings</h3>
                  <p className={`${styles.serviceDesc} pe-md-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                    voluptatum expedita aliquam facilis, enim ullam sequi
                    quibusdam labore. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Libero saepe porro quod ducimus facere
                    reiciendis voluptates itaque cum, sed est odit autem!
                    Dolores debitis explicabo, corporis culpa laborum
                    consequatur, aut excepturi animi alias itaque aliquid ullam
                    iste ab? Doloremque quam eos nam. Ipsum laudantium quaerat
                    architecto, sit harum temporibus quo!
                  </p>
                  <p className={`mt-3 ${styles.Link}`}>
                    EXPLORE WEDDING GALLERY
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
                <div className="col-md-6 pt-5">
                  <div className={`${styles.potraitBox} shadow`}>
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Two Container  */}
              <div
                className={`row mt-5 mb-md-0 mb-5 ${styles.twoContainer}`}
                data-aos="fade-right"
              >
                <div className="col-md-8 mb-5 pt-2 d-md-block  d-flex justify-content-center">
                  <div
                    className={`${styles.landscapeBox} ms-md-5  ms-1 shadow`}
                  >
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657122160/studioink-media-assects/images/home/240969232_3202255946674290_6006084186898400442_n_kqbhd3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-5">
                  <h6 className={`${styles.numbering} `}>TWO</h6>
                  <h3 className={`${styles.serviceTitle} mb-4 `}>
                    Engagements & Couple Sessions
                  </h3>
                  <p className={`${styles.serviceDesc} `}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                    voluptatum expedita aliquam facilis, enim ullam sequi
                    quibusdam labore. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Libero saepe porro quod ducimus facere
                  </p>
                  <p className={`mt-3 ${styles.Link}`}>
                    EXPLORE WEDDING GALLERY
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
              </div>
              {/* Three Container  */}
              <div
                className={`row  ${styles.threeContainer}`}
                data-aos="fade-left"
              >
                <div className="col-md-6 ps-md-5 ps-2">
                  <h6 className={`${styles.numbering} `}>THREE</h6>
                  <h3 className={`${styles.serviceTitle} mb-4 `}>
                    Family Sessions
                  </h3>
                  <p className={`${styles.serviceDesc} `}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                    voluptatum expedita aliquam facilis, enim ullam sequi
                    quibusdam labore. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Libero saepe porro quod ducimus facere
                  </p>
                  <p className={`mt-3 ${styles.Link}`}>
                    EXPLORE WEDDING GALLERY
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
                <div className="col-md-6 pt-5 d-flex justify-content-center">
                  <div
                    className={`${styles.landscapeBox} ms-md-5 ms-0 shadow mt-4`}
                  >
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657121134/studioink-media-assects/images/portfolio/245374763_3234720200094531_2359976059381916996_n_ukj8tl.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Four Container */}
              <div
                className={`row mt-5 mb-md-0 mb-5 ${styles.fourContainer}`}
                data-aos="fade-up"
              >
                <div className="col-md-8 mb-5 pt-2 d-flex align-items-center pe-md-5">
                  <div className={`${styles.potraitBox} ms-md-5 shadow`}>
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657119903/studioink-media-assects/images/home/monikawalecka-1_e0yfuh.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4 pt-5">
                  <h6 className={`${styles.numbering} `}>FOUR</h6>
                  <h3 className={`${styles.serviceTitle} mb-4 `}>Branding</h3>
                  <p className={`${styles.serviceDesc} `}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                    voluptatum expedita aliquam facilis, enim ullam sequi
                    quibusdam labore. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Libero saepe porro quod ducimus facere
                  </p>
                  <p className={`mt-3 ${styles.Link}`}>
                    EXPLORE WEDDING GALLERY
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
              </div>
              {/* Five Container  */}
              <div
                className={`row  ${styles.fiveContainer}`}
                data-aos="fade-down"
              >
                <div className="col-md-6 ps-md-5 ps-2">
                  <h6 className={`${styles.numbering} `}>FIVE</h6>
                  <h3 className={`${styles.serviceTitle} mb-4 `}>
                    Street & Night Life
                  </h3>
                  <p className={`${styles.serviceDesc} `}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                    voluptatum expedita aliquam facilis, enim ullam sequi
                    quibusdam labore. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Libero saepe porro quod ducimus facere
                  </p>
                  <p className={`mt-3 ${styles.Link}`}>
                    EXPLORE WEDDING GALLERY
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
                <div className="col-md-6 pt-5 d-flex justify-content-center">
                  <div
                    className={`${styles.landscapeBox} ms-md-5 ms-0 shadow mt-4`}
                  >
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657084756/studioink-media-assects/images/home/portfolio_2_yebk5g.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Parrallex   */}
        <div className="row my-5">
          <div className="col position-relative p-0">
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image:
                      'https://res.cloudinary.com/ozecloud/image/upload/v1657119601/studioink-media-assects/images/home/slide1_a8y8et.jpg',
                    speed: -10,
                  },
                ]}
                className="aspect-[2/1]"
                style={{ height: '500px' }}
              >
                <div
                  className={`container-fluid position-absolute w-100 h-100 p-0 ${styles.parallexTrans}`}
                >
                  <div className="row h-100 mt-5">
                    <div className="col h-100 d-flex flex-column align-items-center pt-5 px-5"></div>
                  </div>
                </div>
              </ParallaxBanner>
            </ParallaxProvider>
          </div>
        </div>

        {/* Prints And Album  End Section */}
        <div className="row my-5" data-aos="zoom-in">
          <div className="col">
            <div className={`container ${styles.endSection}`}>
              <div className="row">
                <div className="col-md-6 mb-5 d-flex justify-content-center">
                  <div className={`${styles.landscapeBox} ms-md-5 ms-0 shadow`}>
                    <img
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <h6 className={`${styles.numbering} text-center`}>
                    WE ALSO OFFER...
                  </h6>
                  <h3 className={`${styles.serviceTitle} mb-4 text-center`}>
                    Prints & Album
                  </h3>
                  <p className={`${styles.serviceDesc} text-center`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae voluptatem autem iure excepturi doloremque
                    deleniti commodi, delectus officiis repudiandae tempora!
                    Quibusdam libero autem, odio velit aperiam consectetur
                    accusantium magnam nesciunt. Id asperiores dolor deserunt
                    saepe eaque laudantium repellendus eligendi ex culpa
                  </p>
                  <div className={`${styles.horizontalBar} mt-3`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Offering;