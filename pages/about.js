import Layout from "../components/Layout";
import style from "../styles/about.module.css";
const About = () => {
  return (
    <Layout title="About Us">
      {/* Main Container */}
      <div className={`container-fluid  ${style.mainContainer}`}>
        {/* Hero Section  */}
        <div className="row">
          <div className={`col ${style.heroSection} p-0`}>
            <img src="/assects/img/about/hero.jpg" alt="" />

            <div
              className={`${style.transparent}  position-absolute start-0 top-0 w-100 h-100 `}
            >
              <h6 className="text-center">My Name is Jawad Pervez</h6>
              <div className={`${style.desc} my-xl-4`} style={{ width: "40%" }}>
                <h1 className="text-center">
                  I am Landscape & Cityscape photographer
                </h1>
                <p className="text-center mt-sm-4">
                  I love that feeling when I am in the right place. Than its
                  time to stand still, watch and capture the right moment.
                </p>
              </div>
              <div
                className={`container ${style.numbers} d-none`}
                style={{ width: "50%" }}
              >
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <h3 className="text-center">5000+</h3>
                    <p className="text-center">SOLD IMAGES ON STOCKS</p>
                  </div>
                  <div className="col-4">
                    {" "}
                    <h3 className="text-center">5000+</h3>
                    <p className="text-center">SOLD IMAGES ON STOCKS</p>
                  </div>
                  <div className="col-4">
                    {" "}
                    <h3 className="text-center">5000+</h3>
                    <p className="text-center">SOLD IMAGES ON STOCKS</p>
                  </div>
                </div>
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
        <div className="row my-5" data-aos="fade-up">
          <div className="col">
            <div className="container">
              {/* Short Biography  */}
              <div className={`row ${style.biography}`}>
                <div className="col px-md-5">
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
                <div className="col px-md-5">
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
              <div className={`row my-5 ${style.numbers}`} data-aos="fade-up">
                <div className="col-md-4 col-12 px-md-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-center"></h1>
                  <p
                    className="text-center mt-3"
                    style={{ maxWidth: "342.5px" }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor, suscipit.
                  </p>
                </div>
                <div className="col-md-4 col-12 px-md-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-center"></h1>
                  <p
                    className="text-center mt-3"
                    style={{ maxWidth: "342.5px" }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor, suscipit.
                  </p>
                </div>
                <div className="col-md-4 col-12 px-md-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-center"></h1>
                  <p
                    className="text-center mt-3"
                    style={{ maxWidth: "342.5px" }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor, suscipit.
                  </p>
                </div>
              </div>
              {/* Publication  */}
              <div
                className={`row my-5 ${style.publication}`}
                data-aos="fade-up"
              >
                <div className="col">
                  <h6 className="text-center">MY TOP ACHIEVEMNET</h6>
                  <h1 className="text-center">Publications & Awards</h1>
                </div>
              </div>
              <div className={`row ${style.achievement}`} data-aos="fade-up">
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
