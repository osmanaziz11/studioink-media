// Import Components
import Layout from "../components/Layout";

// Import Css Modules
import style from "../styles/contact.module.css";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className={`container-fluid ${style.contactContainer} my-3`}>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h5 className="mx-3 my-2">- Contact Us -</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className={`text-center my-2`}>Let’s work together</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p className="text-center my-3" style={{ width: "500px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              molestiae fugit sit asperiores reiciendis quod quis totam illo qui
              ducimus.
            </p>
          </div>
        </div>
        {/* Main Container   */}
        <div className="row my-5">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <form action="" className="mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control p-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control my-4 p-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="container d-flex justify-content-center">
                      <button
                        type="button"
                        className={`btn btn-dark my-3 w-25 ${style.submitBtn}`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={`row my-4 ${style.contactInfo}`}>
                <div className="col-xl-4 col-md-4 mb-5">
                  <h6 className="text-center">Our Address</h6>
                  <p className="text-center mb-0">
                    85 Not A Real St. – 13th Floor
                  </p>
                  <p className="text-center mb-0">Anytown, CA 12345</p>
                </div>
                <div className="col-xl-4 col-md-4 mb-5">
                  <h6 className="text-center">General Inquiry</h6>
                  <p className="text-center mb-0">
                    85 Not A Real St. – 13th Floor
                  </p>
                  <p className="text-center mb-0">Anytown, CA 12345</p>
                </div>
                <div className="col-xl-4 col-md-4 mb-5">
                  <h6 className="text-center">Phone Number</h6>
                  <p className="text-center mb-0">
                    85 Not A Real St. – 13th Floor
                  </p>
                  <p className="text-center mb-0">Anytown, CA 12345</p>
                </div>
              </div>
              <div className={`row ${style.mapContainer}`}>
                <div className="col">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7432091803453!2d73.02663591459232!3d33.71559304284415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8c137888d%3A0xc3ccfd031ad14ba6!2sBahria%20University!5e0!3m2!1sen!2s!4v1655478235062!5m2!1sen!2s"
                    style={{
                      width: "100%",
                      minHeight: "400px",
                      style: "border:0",
                      allowFullScreen: "",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
