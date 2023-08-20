// Css Module
import style from '../styles/wedding.module.css';

// custom components
import Layout from '../components/Layout';

// components
import Image from 'next/image';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const Wedding = () => {
  return (
    <Layout title="Wedding">
      <div className={style.wedding_container}>
        {/* hero section  */}
        <div className="row">
          <div className={`col-lg-8 ${style.left_section} position-relative`}>
            {/* Text  */}
            <div className={style.text}>
              <h1>Covers your moments</h1>
            </div>
            {/* Large Image  */}
            <div className={style.lg_img}>
              <Image
                src="https://res.cloudinary.com/ozecloud/image/upload/v1657119601/studioink-media-assects/images/home/slide1_a8y8et.jpg"
                alt="Middle Image"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_5/v1657119601/studioink-media-assects/images/home/slide1_a8y8et.jpg"
                className={`shadow rounded ${style.image}`}
              />
            </div>
            {/* Small Image   */}
            <div className={style.sm_img}>
              <Image
                src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                alt="Left Image"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                className={`shadow rounded ${style.image}`}
              />
            </div>
          </div>
          <div className={`col-lg-4 ${style.right_section} position-relative`}>
            <div className={style.desc}>
              <h1 className="text-lg-start text-center">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="pe-3 text-lg-start text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                eaque nisi et perferendis nesciunt molestiae ex cupiditate!
                Quas, voluptatem earum! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti minus blanditiis assumenda veritatis
                architecto reprehenderit. Excepturi, neque. Sed, omnis
                voluptatem?
              </p>
            </div>
          </div>
        </div>
        {/* end of hero section  */}
        <div className="row mt-5">
          <div
            className="col-12 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className={`globalPgeHeading text-center ${style.numbers}`}>
              01
            </h1>
            <h3
              className={`globalPgeHeading  text-center ${style.customHeading}`}
            >
              Mission
            </h3>
            <p className="text-center mt-3" style={{ maxWidth: '400px' }}>
              Our Goal is clear bring people together, celebrate love, and have
              the best time doing it buy creating a unique backdrop.
            </p>
          </div>
        </div>
        <div className="row my-3" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div
              style={{ width: '1px', height: '30px', backgroundColor: 'black' }}
            ></div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-3 col-md-6 col-12 px-sm-5 mb-5 d-flex flex-column justify-content-start align-items-center">
            <h1 className={`globalPgeHeading text-start ${style.numbers}`}>
              02
            </h1>
            <h3
              className={`globalPgeHeading  text-start ${style.customHeading}`}
            >
              asian
            </h3>
            <p className="text-center mt-3 " style={{ maxWidth: '400px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum
              mollitia accusantium, possimus culpa reprehenderit.
            </p>
            <button className="px-3 py-2 shadow rounded">Get Started</button>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div
              className={` ${style.imgBox}`}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <Image
                src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                alt="Left Image"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                className={`rounded ${style.image} shadow`}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12  pt-5">
            <div className={` ${style.imgBox} mt-5`} data-aos="fade-zoom-in">
              <Image
                src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                alt="Left Image"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                className={`rounded ${style.image} shadow`}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-md-1 mb-5 col-12 px-5 d-flex flex-column justify-content-center align-items-center pt-5 ">
            <h1 className={`globalPgeHeading text-start ${style.numbers}`}>
              03
            </h1>
            <h3
              className={`globalPgeHeading  text-start ${style.customHeading}`}
            >
              western
            </h3>
            <p className="text-center mt-3 " style={{ maxWidth: '400px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum
              mollitia accusantium, possimus culpa reprehenderit.
            </p>
            <button className="px-3 py-2 shadow rounded">Book Now</button>
          </div>
        </div>
        {/* Testnomials  */}
        <div className="row mt-md-5">
          <div className="col">
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
                {/* <div className="contianer position-absolute">
                  <div className="row">
                    <div className="col-12" style={{ borderLeft: '1px solid' }}>
                      <div className="testnomial">
                        <p
                          className="px-5 text-center"
                          style={{ maxWidth: '300px' }}
                        >
                          WHAT THEY’RE SAYING ABOUT OUR SPACE.
                        </p>
                        <p className="px-md-5 py-3 text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Culpa asperiores quas sit et, reprehenderit
                          magni maxime perspiciatis officiis recusandae
                          corporis! Nobis, architecto! Excepturi incidunt Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Temporibus expedita recusandae voluptates molestiae
                          ratione vel eum quia autem quos sit sint repellendus
                          maiores, iusto accusamus repellat commodi. Nobis, ea
                          delectus. eveniet cumque laborum ipsum iusto quos.
                        </p>
                        <p className="px-5 text-center">Loura & Asim</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </ParallaxBanner>
            </ParallaxProvider>
          </div>
        </div>
        <div className={`row my-5 ${style.packageHeading}`}>
          <div className="col-12">
            <div className="container px-md-1 px-0">
              <div className="row my-5">
                <div className="col">
                  <h1
                    className={`globalPgeHeading text-center ${style.numbers}`}
                    style={{ letterSpacing: '1px !important' }}
                  >
                    Purchase a Wedding Shoot
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-9 mb-4" data-aos="zoom-out-up">
                  <h4 className="my-4 text-center ">Bronze</h4>
                  <p className="text-center">
                    6 Hours Coverage, includes 1 Photographer & 1
                    Cinematographer.
                  </p>
                  <div className={style.imgBox}>
                    <Image
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      alt="Left Image"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      className={`rounded ${style.image} shadow`}
                      priority="true"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-9 mb-4" data-aos="zoom-out-up">
                  <h4 className="my-4 text-center ">Extras</h4>
                  <p className="text-center">
                    Additional Hour, Additional Photographer, Additional
                    Videographer, Crane Cinematographer, Italian storybook with
                    glass cover, 100 Images
                  </p>
                  <div className={style.imgBox}>
                    <Image
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      alt="Left Image"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      className={`rounded ${style.image} shadow`}
                      priority="true"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-9 mb-4" data-aos="zoom-out-up">
                  <h4 className="my-4 text-center ">Gold</h4>
                  <p className="text-center">
                    10 Hours Coverage, includes 1 Photographer & 1
                    Cinematographer.
                  </p>
                  <div className={style.imgBox}>
                    <Image
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      alt="Left Image"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/f_auto,q_10/v1657113142/studioink-media-assects/images/home/191445212_3130448420521710_1492834845685353351_n_inc2v8.jpg"
                      className={`rounded ${style.image} shadow`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row my-5 ${style.packageHeading}`}>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center flex-column align-items-center">
                  <h3 className="text-center mb-4">Whats Include</h3>
                  <p className="text-center " style={{ maxWidth: '500px' }}>
                    All Packages above includes Indoor Studio Shoot and Outdoor
                    Location Shoot All Images will be airbrushed and provided on
                    a USB. Equipment’s Used Drone Camera (Included with both
                    options but depends on the weather & location)
                    Gimbal/SteadyCam (For smooth ground shots) Go Pro Hero
                    Camera (For Following cars shots only on Clients Demand)
                  </p>
                </div>
                <div className="col-12 d-flex justify-content-center flex-column align-items-center">
                  <h3 className="text-center my-4">What we deliver</h3>
                  <p className="text-center" style={{ maxWidth: '500px' }}>
                    Filmed in Full HD (1920x1080) | 16:9 Widescreen Cinematic
                    Style Editing Exclusive Masterpiece Trailer Document
                    Interviews (Included with 2 cinematographers) USB in a
                    presentation Box and Smart Access (online link)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content section   */}
        {/* end of content section  */}
      </div>
    </Layout>
  );
};
export default Wedding;