// css module
import styles from '../../styles/portfolio.module.css';
import style from '../../styles/offering.module.css';

// custom components
import Layout from '../../components/Layout';

// json objects
import sliderImages from '../../website-data/portfolio/sliderImages';

// Components
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const [width, setWidth] = useState(0);
  const timeout = useRef(null);

  function resetInterval() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }
  useEffect(() => {
    resetInterval();

    timeout.current = setTimeout(() => {
      let element = document.getElementById('sc');
      setWidth(width == 0 ? element.scrollWidth : 0);
      element.scrollTo(width, 0);
    }, 3000);
    return () => {
      resetInterval();
    };
  }, [width]);

  return (
    <Layout title="Portfolio">
      {/* Portfolio slider */}
      <div className="row">
        <div className={`col p-0 position-relative ${styles.slider}`}>
          <ul
            id="sc"
            className="p-0 d-flex list-unstyled w-100 h-100 m-0 overflow-hidden"
          >
            {sliderImages.map((img, index) => {
              return (
                <li className="" key={index}>
                  <div
                    className={`position-relative ${styles.img} w-100 h-100`}
                  >
                    <Image
                      src={img.image}
                      alt="Image"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={img.lowImage}
                      objectFit="cover"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="position-absolute w-100 h-100 px-sm-4 py-4 px-2 top-0">
            <div
              className={`${styles.transition} d-flex flex-column justify-content-center align-items-center w-100  h-100`}
            >
              <h1 className="text-center globalPgeHeading text-white px-3">
                Best Collection
              </h1>
              <div className="mb-4"></div>
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam quo facere sit autem, mollitia libero expedita? Totam
                perspiciatis ipsam commodi magni, magnam nemo molestias esse
                omnis quasi debitis eaque sapiente obcaecati minima dolore
                ducimus quo, ea repellendus? Autem, minima expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Content  */}
      <div className="row">
        <div className="col">
          <div className={`container-fluid ${style.mainContainer} p-0`}>
            <div className="row mt-5 pt-5">
              <div className="col">
                <div className="container">
                  {/* Four Container */}
                  <div
                    className={`row mt-5 mb-md-0 mb-5 ${style.fourContainer}`}
                    data-aos="fade-up"
                  >
                    <div className="col-md-8 mb-5 pt-2 d-flex align-items-center pe-md-5">
                      <div className={`${style.potraitBox} ms-md-5 shadow`}>
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_auto/v1657120679/studioink-media-assects/images/portfolio/266316269_3281663698733514_926786689513757398_n_d3xdeo.jpg"
                          alt=""
                          className="shadow rounded"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-5">
                      <h6 className={`${style.numbering} `}>WEDDING</h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Saira & Waseem
                      </h3>
                      <p className={`${style.serviceDesc}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE THEIR LOVE STORY
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                  </div>
                  {/* One Container  */}
                  <div
                    className={`row mt-5 ${style.OneContainer}`}
                    data-aos="fade-up"
                  >
                    <div className="col-md-6 px-sm-4">
                      <h6 className={`${style.numbering} `}>MODEL SHOOTS</h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Neilo Ray
                      </h3>
                      <p className={`${style.serviceDesc} pe-md-5`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere reiciendis
                        voluptates itaque cum, sed est odit autem! Dolores
                        debitis explicabo, corporis culpa laborum consequatur,
                        aut excepturi animi alias itaque aliquid ullam iste ab?
                        Doloremque quam eos nam. Ipsum laudantium quaerat
                        architecto, sit harum temporibus quo!
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE THEIR POSES?
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                    <div className="col-md-6 pt-5">
                      <div className={`${style.potraitBox} shadow`}>
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/v1657120936/studioink-media-assects/images/portfolio/280284482_3393377847562098_5766695037208853523_n_m9akq3.jpg"
                          alt=""
                          className="shadow rounded"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Two Container  */}
                  <div
                    className={`row mt-5 mb-md-0 mb-5 ${style.twoContainer}`}
                    data-aos="fade-right"
                  >
                    <div className="col-md-8 mb-5 pt-2 d-md-block  d-flex justify-content-center">
                      <div
                        className={`${style.landscapeBox} ms-md-5  ms-1 shadow`}
                      >
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/v1657121095/studioink-media-assects/images/portfolio/FG-appetizers_xonfn8_et0dft.webp"
                          alt=""
                          className="shadow rounded"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-5">
                      <h6 className={`${style.numbering} `}>
                        FOOD PHOTOGRAPHY
                      </h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Amara Resturant
                      </h3>
                      <p className={`${style.serviceDesc} `}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE THEIR DELICIOUS FOOD?
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                  </div>
                  {/* Three Container  */}
                  <div
                    className={`row  ${style.threeContainer}`}
                    data-aos="fade-left"
                  >
                    <div className="col-md-6 ps-md-5 ps-2">
                      <h6 className={`${style.numbering} `}>THREE</h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Family Sessions
                      </h3>
                      <p className={`${style.serviceDesc} `}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE WEDDING GALLERY
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                    <div className="col-md-6 pt-5 d-flex justify-content-center">
                      <div
                        className={`${style.landscapeBox} ms-md-5 ms-0 shadow mt-4`}
                      >
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/v1657121134/studioink-media-assects/images/portfolio/245374763_3234720200094531_2359976059381916996_n_ukj8tl.jpg"
                          alt=""
                          className="shadow rounded"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Four Container */}
                  <div
                    className={`row mt-5 mb-md-0 mb-5 ${style.fourContainer}`}
                    data-aos="fade-up"
                  >
                    <div className="col-md-8 mb-5 pt-2 d-flex align-items-center pe-md-5">
                      <div className={`${style.potraitBox} ms-md-5 shadow`}>
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/v1657121243/studioink-media-assects/images/portfolio/278799133_3382229092010307_1979798675054647137_n_zssh4x.jpg"
                          alt=""
                          className="shadow rounded"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-5">
                      <h6 className={`${style.numbering} `}>LOVE STORY</h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Arela & Baeo
                      </h3>
                      <p className={`${style.serviceDesc} `}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE WEDDING GALLERY
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                  </div>
                  {/* Five Container  */}
                  <div
                    className={`row  ${style.fiveContainer}`}
                    data-aos="fade-down"
                  >
                    <div className="col-md-6 ps-md-5 ps-2">
                      <h6 className={`${style.numbering} `}>FIVE</h6>
                      <h3 className={`${style.serviceTitle} mb-4 `}>
                        Street & Night Life
                      </h3>
                      <p className={`${style.serviceDesc} `}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestiae voluptatem autem iure excepturi
                        doloremque deleniti commodi, delectus officiis
                        repudiandae tempora! Quibusdam libero autem, odio velit
                        aperiam consectetur accusantium magnam nesciunt. Id
                        asperiores dolor deserunt saepe eaque laudantium
                        repellendus eligendi ex culpa voluptatum expedita
                        aliquam facilis, enim ullam sequi quibusdam labore.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Libero saepe porro quod ducimus facere
                      </p>
                      <p className={`mt-3 ${style.Link}`}>
                        EXPLORE WEDDING GALLERY
                      </p>
                      <div className={`${style.horizontalBar} mt-3`}></div>
                    </div>
                    <div className="col-md-6 py-5 d-flex justify-content-center">
                      <div
                        className={`${style.landscapeBox} ms-md-5 ms-0 shadow mt-4`}
                      >
                        <img
                          src="https://res.cloudinary.com/ozecloud/image/upload/v1657121387/studioink-media-assects/images/portfolio/_MGL6110_nufwtp.jpg"
                          alt=""
                          className="shadow rounded"
                        />
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
export default Portfolio;
