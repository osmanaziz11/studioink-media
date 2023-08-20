import Layout from '../components/Layout';
import style from '../styles/about.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useRef } from 'react';
import { useEffect } from 'react';
const About = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const isInViewport = (ref) => {
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    window.addEventListener(
      'scroll',
      function () {
        isInViewport(inputRef1.current)
          ? inputRef1.current.classList.add('activeNumber1')
          : '';
        isInViewport(inputRef2.current)
          ? inputRef2.current.classList.add('activeNumber2')
          : '';
        isInViewport(inputRef3.current)
          ? inputRef3.current.classList.add('activeNumber3')
          : '';
      },
      true
    );
    return () => {
      window.removeEventListener(
        'scroll',
        function () {
          const element1 = document.getElementById('1');
          const element2 = document.getElementById('2');
          const element3 = document.getElementById('3');

          isInViewport() ? element1.classList.add('activeNumber1') : '';
          isInViewport() ? element2.classList.add('activeNumber2') : '';
          isInViewport() ? element3.classList.add('activeNumber3') : '';
        },
        true
      );
    };
  }, []);

  return (
    <Layout title="About Us">
      {/* Main Container */}
      <div className={style.mainContainer}>
        {/* Hero Section  */}
        <div className={`row `}>
          <div
            className={`col ${style.heroSection} p-0`}
            style={{ height: '500px' }}
          >
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image:
                      'https://res.cloudinary.com/ozecloud/image/upload/v1657109041/studioink-media-assects/images/about/91391977_266641131000043_63850718989123584_n_hje3cb.jpg',
                    speed: -10,
                  },
                ]}
                className="aspect-[2/1] h-100"
              ></ParallaxBanner>
            </ParallaxProvider>

            <div
              className={`${style.transparent}  position-absolute start-0 top-0 w-100 h-100 `}
            >
              <h6 className="text-center">My Name is Jawad Pervez</h6>
              <div className={`${style.desc} my-xl-4`} style={{ width: '40%' }}>
                <h1 className="text-center">
                  I am Landscape & Cityscape photographer
                </h1>
                <p className="text-center mt-sm-4">
                  I love that feeling when I am in the right place. Than its
                  time to stand still, watch and capture the right moment.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Heading   */}
        <div className="row my-5" data-aos="fade-up">
          <div className="col">
            <div className={`container-fluid ${style.aboutHeading}`}>
              <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                  <h5 className="mx-3 my-2">- ABOUT ME -</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className={`text-center my-2`}>Story about me</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Content  */}
        <div className="row my-5">
          <div className="col">
            <div className="container">
              {/* Short Biography  */}
              <div className={`row ${style.biography}`}>
                <div className="col px-md-5" data-aos="fade-up">
                  <h6 className=" mx-md-5 text-sm-start text-center">
                    Short Biography
                  </h6>
                  <p className="text-justify mx-md-5 text-sm-start text-center">
                    I have been fascinated by the possibilities of photography
                    since the beginning of college. I grew up at beautiful Orava
                    region under Namestovo and after college at University of
                    Zilina I started exploring world, spending most of my free
                    time in the nature and beautiful cities around the world. My
                    profession is a visual designer for 14 years – I deliver
                    unique websites that reflects the originality of brands and
                    delights users with focus on usability.
                  </p>
                </div>
              </div>
              {/* Photography */}
              <div className={`row my-5 ${style.photography}`}>
                <div className="col px-md-5" data-aos="fade-up">
                  <h6 className=" mx-md-5 text-sm-start text-center">
                    Photography
                  </h6>
                  <p className="text-justify mx-md-5 text-sm-start text-center">
                    I love photography because I forget about everything that
                    happens around me every day. I enjoy every moment when I can
                    travel, be outside and discover the beauty of nature or
                    interesting places. In my photography, I try to pay
                    particular attention to good composition and light, which
                    are the basis of good photography for me. I try to have the
                    final photos as natural as possible with perfect technical
                    quality.
                  </p>
                  <p className="text-justify mx-md-5 text-sm-start text-center">
                    For the last 3 years I have been trying my luck in world
                    competitions (International Photography Awards – WPE, 35
                    Awards, IPA Photo Awards), where I recieved several awards,
                    for which I am very grateful. Also, some of my photos have
                    been published in book publications and one on the Lonely
                    Planet website.
                  </p>
                </div>
              </div>
              {/* Numbers  */}
              <div className={`row my-5  numbers`}>
                <div className="col-md-4 mb-5 col-12 px-md-2 d-flex flex-column justify-content-center align-items-md-end align-items-center">
                  <div
                    className="shadow pt-4 d-flex flex-column justify-content-center align-items-center"
                    style={{ minWidth: '90%', maxWidth: '300px' }}
                    data-aos="fade-up"
                  >
                    <h1
                      id="1"
                      ref={inputRef1}
                      className="text-center mb-0 ms-4"
                    ></h1>
                    <p
                      className="text-center mt-3"
                      style={{ maxWidth: '342.5px' }}
                    >
                      CLIENTS
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 px-md-2 mb-5 d-flex flex-column justify-content-center align-items-md-end align-items-center"
                  data-aos="fade-up"
                >
                  <div
                    className="shadow pt-4 d-flex flex-column justify-content-center align-items-center"
                    style={{ minWidth: '90%', maxWidth: '300px' }}
                  >
                    <h1
                      id="2"
                      ref={inputRef2}
                      className="text-center mb-0 ms-4"
                    ></h1>
                    <p
                      className="text-center mt-3"
                      style={{ maxWidth: '342.5px' }}
                    >
                      SHOOTS
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-12 px-md-2 mb-4 d-flex flex-column align-items-md-end align-items-center"
                  data-aos="fade-up"
                >
                  <div
                    className="shadow pt-4 d-flex flex-column justify-content-center align-items-center"
                    style={{ minWidth: '90%', maxWidth: '300px' }}
                  >
                    <h1
                      id="2"
                      ref={inputRef3}
                      className="text-center mb-0 ms-4"
                    ></h1>
                    <p
                      className="text-center mt-3"
                      style={{ maxWidth: '342.5px' }}
                    >
                      EVENTS
                    </p>
                  </div>
                </div>
              </div>
              {/* Publication  */}
              <div
                className={`row my-5 ${style.publication}`}
                data-aos="fade-up"
              >
                <div className="col">
                  <h6 className="text-center">- MY TOP GEAR -</h6>
                  {/* <h1 className="text-center">Publications & Awards</h1> */}
                </div>
              </div>
              <div className={`row ${style.achievement}`}>
                <div className="col-md-4 col-12 px-md-3">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Et, praesentium facilis. A veritatis modi minus, hic
                    reprehenderit quas tenetur neque?
                  </p>
                  <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
                  <p className="text-center">- 2022 -</p>
                </div>
                <div className="col-md-4 col-12 px-md-3">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Et, praesentium facilis. A veritatis modi minus, hic
                    reprehenderit quas tenetur neque?
                  </p>
                  <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
                  <p className="text-center">- 2022 -</p>
                </div>
                <div className="col-md-4 col-12 px-md-3">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Et, praesentium facilis. A veritatis modi minus, hic
                    reprehenderit quas tenetur neque?
                  </p>
                  <h6 className="text-center">Lorem ipsum dolor sit amet.</h6>
                  <p className="text-center">- 2022 -</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;