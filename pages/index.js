/* eslint-disable @next/next/no-img-element */
// custom components
import Slider from '../components/slider';
import Instafeed from '../components/Instafeed';
import Layout from '../components/Layout';
import Parallax from '../components/Parallax';

// components
import Link from 'next/link';
import Image from 'next/image';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CgArrowLongLeft } from 'react-icons/cg';
import { CgArrowLongRight } from 'react-icons/cg';

// css modules
import styles from '../styles/home.module.css';
import styles_global from '../styles/about_signature.module.css';

// json objects
import Projects from '../website-data/home/projects';
import Testmoinals from '../website-data/home/testmonials';

const Home = ({ posts }) => {
  const scroll_to_end = () => {
    var element = document.getElementById('sc');
    element.scrollTo(element.scrollWidth, 0);
  };
  const scroll_to_start = () => {
    var element = document.getElementById('sc');
    element.scrollTo(0, 0);
  };
  return (
    <Layout title="Home">
      {/* slider Section  */}
      <div className="row mt-5">
        <div className="col ">
          <Slider></Slider>
        </div>
      </div>
      {/* slider section ends  */}

      {/* About Section  */}
      <div className={`row mt-5 mb-2 py-5 ${styles_global.about_section}`}>
        <div
          className="col-md-6 d-lg-block d-flex justify-content-center align-items-center ps-xl-0 px-0 position-relative"
          style={{ minHeight: '438px' }}
        >
          <div
            className={styles_global.vertical_img}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src="https://res.cloudinary.com/ozecloud/image/upload/v1657084453/studioink-media-assects/images/home/about_photo_1_tcqp7w.jpg"
              alt="about image"
              layout="fill"
              className={` end-xl-0 shadow`}
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657084453/studioink-media-assects/images/home/about_photo_1_tcqp7w.jpg"
            ></Image>
          </div>
          <div
            className={styles_global.horizontal_img}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="https://res.cloudinary.com/ozecloud/image/upload/v1657109228/studioink-media-assects/images/about/1_yo9ykr.jpg"
              alt="about image"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657109228/studioink-media-assects/images/about/1_yo9ykr.jpg"
              className={` d-lg-block shadow d-none`}
            ></Image>
          </div>
        </div>
        <div
          className={`col-md-6 py-md-4 ps-xl-3 ps-lg-0 px-md-4 p-sm-5 p-4  ${styles.about_desc}`}
        >
          <div
            className={` d-flex align-items-center w-100 ${styles_global.top_heading_container}`}
          >
            <div className="d-inline-block"></div>
            <h6 className="d-inline-block mt-1 mx-3">ABOUT ME</h6>
          </div>
          <h1 className="mt-4 pb-4 me-xl-3 me-md-1 me-sm-3 text-sm-start text-center">
            I’m Jawad Pervez, a professional photographer based in London.
          </h1>
          <div className={styles.headingBar}></div>
          <p className="me-sm-2 me-0 my-4 text-sm-start text-center">
            Photography, Cinematographer, Storyteller, and founder of Studio
            INK. I love meeting new people, experiencing new things and sharing
            stories with the world through a camera. Photography has been a
            passion of mine since I can remember and has quickly become my
            full-time career. This passion is what led me to create Studio INK.
            So lets get to know each other! I have 100 other things I can share,
            and I am sure you and your fiancé do too. After all, your wedding
            day is one of the most important days of your life. You should feel
            comfortable with those who are there to document it.
          </p>
          <Link href="/about">
            <a>
              <p className="text-sm-start text-center">MORE ABOUT ME</p>
            </a>
          </Link>
        </div>
      </div>
      {/* About section ends  */}

      {/* Portfolio Section  */}
      <div className={`container-fluid ${styles.portfolio}`}>
        <div className="row">
          <div className="col">
            <div
              className={`mx-sm-4 mx-1 d-flex align-items-center w-100 ${styles_global.top_heading_container}`}
            >
              <div className="d-inline-block"></div>
              <h6 className="d-inline-block mt-1 mx-3">MY WORK</h6>
            </div>
            <h1 className="my-3 mx-4">Portfolio</h1>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid my-4 overflow-hidden ${styles.portfolio_container}`}
      >
        <CgArrowLongLeft
          className={`${styles.left_nav} ${styles.navigator_icons} position-absolute top-50`}
          onClick={scroll_to_start}
        />
        <CgArrowLongRight
          className={` ${styles.right_nav} ${styles.navigator_icons} position-absolute  top-50 `}
          onClick={scroll_to_end}
        />
        <ul
          id="sc"
          className="d-flex list-unstyled m-0 p-0 w-100 overflow-scroll"
        >
          {Projects.map((item, index) => {
            return (
              <li data-aos="zoom-in" className="shadow rounded" key={index}>
                <Link href={`/`}>
                  <div
                    className={`shadow mx-3 ${styles.boxes} position-relative`}
                  >
                    <img
                      src={item.thumbnail}
                      alt=""
                      className={`position-absolute top-0 w-100 h-100`}
                    />
                    <div
                      className={`${styles.portfolio_effect} position-relative w-100 d-flex flex-column justify-content-between h-100 top-0 p-5`}
                    >
                      <p className="text-center">{item.date}</p>
                      <span>
                        <h4 className="text-center mt-5">{item.title}</h4>
                        <h5 className="text-center ">View Project</h5>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Portfolio Section ends */}

      {/* Services Section  */}
      <div
        className={` d-flex align-items-center my-5 px-sm-5 px-1 w-100 ${styles_global.top_heading_container}`}
      >
        <div className="d-inline-block"></div>
        <h6 className="d-inline-block mt-1 mx-3">MY SERVICES</h6>
      </div>
      <div className={`row`}>
        <div
          className={`col position-relative p-0  ${styles.serviceContainer}`}
          style={{ height: '800px' }}
        >
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image:
                    'https://res.cloudinary.com/ozecloud/image/upload/v1657119601/studioink-media-assects/images/home/slide1_a8y8et.jpg',
                  speed: 20,
                },
              ]}
              className="aspect-[2/1] h-100"
            >
              <div
                className={`container-fluid h-100 position-absolute   ${styles.transition}`}
              ></div>
              <h1
                className={`globalPgeHeading position-absolute top-0 ${styles.asianHeading}`}
              >
                Asian Weddings
              </h1>
              <h1
                className={`globalPgeHeading position-absolute w-100 text-md-start text-center  ${styles.westernHeading}`}
              >
                Western Weddings
              </h1>
              <div
                className={`container-fluid h-100 position-absolute ${styles.imgGrid}`}
              >
                <div className={`row h-100`}>
                  <div className="col-md-4 p-0  d-flex justify-content-md-end justify-content-center align-items-md-center align-items-end">
                    <div
                      className="img shadow rounded"
                      style={{ height: '350px', width: '300px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657112708/studioink-media-assects/images/home/128908786_2999487060284514_5129379150781503199_n_axvhyj.jpg"
                        alt=""
                        className=" shadow rounded"
                      />
                    </div>
                  </div>
                  <div className="col-md-4  d-flex justify-content-center align-items-center">
                    <div
                      className={styles.imgSec}
                      style={{ height: '500px', width: '400px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657112889/studioink-media-assects/images/home/168626650_3090243014542251_6733056422092837417_n_cba2n6.jpg"
                        alt=""
                        className=" shadow rounded"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 p-0  d-flex justify-content-md-start justify-content-center align-items-md-center align-items-start">
                    <div
                      className="img"
                      style={{ height: '350px', width: '300px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657112818/studioink-media-assects/images/home/134378268_3022148261351727_2834332533211692828_n_qc4wqa.jpg"
                        alt=""
                        className=" shadow rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
        </div>
      </div>
      {/* Service Section ending  */}

      {/* Testnomials  */}
      <div
        className={` d-flex align-items-center my-5 px-sm-5 px-1 w-100 ${styles_global.top_heading_container}`}
      >
        <div className="d-inline-block"></div>
        <h6 className="d-inline-block mt-1 mx-3">TESTMONIALS</h6>
      </div>
      <div className={`row my-5 ${styles.testnomials}`}>
        <div className="col-12"></div>
        <div className="col-12 d-flex flex-wrap justify-content-center my-5">
          {Testmoinals.map((item, index) => {
            return (
              <figure className="snip1574 shadow rounded" key={index}>
                <img src={item.thumbnail} alt="profile-sample2" />
                <div
                  className={`w-100 h-100 position-absolute top-0 start-0 transitionEffect`}
                >
                  <figcaption>
                    <p>{item.comments}</p>
                    <h3>{item.name}</h3>
                    <h5>{item.designation}</h5>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
      {/* Testmonials ends */}

      {/* Services Collage section */}
      <div className={`row`}>
        <div
          className={`col position-relative p-0 ${styles.allServiceContainer}`}
          style={{ height: '600px' }}
        >
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image:
                    'https://res.cloudinary.com/ozecloud/image/upload/v1657120067/studioink-media-assects/images/home/PHOTOGRAPHY_BG_V3-compressor_rharvn.jpg',
                  speed: 20,
                },
              ]}
              className="aspect-[2/1] h-100"
            >
              <div
                className={`container-fluid position-absolute w-100 h-100 p-0 ${styles.parallexTrans}`}
              >
                <div className="row h-100 ">
                  <div className="col-md-4 d-flex flex-column justify-content-sm-center justify-content-end align-items-center">
                    <div className={`${styles.imgBoxes} shadow`}>
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657114085/studioink-media-assects/images/home/153119016_3059891124244107_2507483370404069409_n_qr5jvr.jpg"
                        alt=""
                      />
                      <div className="position-absolute w-100 h-100"></div>
                      <h1 className="globalPgeHeading">Potrait</h1>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <div className={`${styles.imgBoxes} shadow`}>
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657119903/studioink-media-assects/images/home/monikawalecka-1_e0yfuh.jpg"
                        alt=""
                      />
                      <div className="position-absolute w-100 h-100"></div>
                      <h1 className="globalPgeHeading">Food</h1>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-sm-center justify-content-start align-items-center">
                    <div className={`${styles.imgBoxes} shadow`}>
                      <img
                        src="https://res.cloudinary.com/ozecloud/image/upload/v1657119974/studioink-media-assects/images/home/160014211_3071898189710067_3080902595824099004_n_htfuuh.jpg"
                        alt=""
                      />
                      <div className="position-absolute w-100 h-100"></div>
                      <h1 className="globalPgeHeading">Love</h1>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
        </div>
      </div>
      {/* service collage section ends  */}

      {/* InstaFeed section  */}
      <div
        className={` d-flex align-items-center my-5 px-sm-5 px-1 w-100 ${styles_global.top_heading_container}`}
      >
        <div className="d-inline-block"></div>
        <h6 className="d-inline-block mt-1 mx-3">MY INSTAFEED</h6>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Instafeed posts={posts}></Instafeed>
        </div>
      </div>
      {/* Instafeed section ends  */}
    </Layout>
  );
};

export async function getStaticProps() {
  let posts = null;
  try {
    // const resources = await fetch(
    //   `https://@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image`,
    //   {
    //     headers: {
    //       Authorization: `Base ${Buffer.from(
    //         process.env.CLOUDINARY_API_KEY +
    //           ':' +
    //           process.env.CLOUDINARY_API_SECRET
    //       ).toString('base64')}`,
    //     },
    //   }
    // );
    // const resp = await resources.json();
    // console.log(resp);
    const fetchData = await fetch(
      `https://feeds.behold.so/vEaaueI9X9TIUDeNKBtT`
    );
    posts = await fetchData.json();
    console.log(posts);
  } catch (err) {}
  return {
    props: {
      posts,
    },
    revalidate: 7200,
  };
}
export default Home;