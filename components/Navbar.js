import { HiMenuAlt3 } from "react-icons/Hi";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container-fluid" id="navbar">
          <div className="row px-xl-5 py-5 px-3">
            <div className="col-lg-5 col-0 pe-0  d-flex justify-content-center flex-column">
              <ul className="w-100 m-0 p-0 d-lg-flex d-none justify-content-xl-center justify-content-end list-unstyled">
                <li className="me-xl-5 me-lg-4">
                  <a href="">HOME</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">PORTFOLIO</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">FEATURES</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">PACKAGES</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-2 px-0  d-flex justify-content-start">
              <img
                className="w-100 "
                src="/Logo.png"
                alt=""
                style={{ minWidth: "150px" }}
              />
            </div>
            <div className="col-lg-5 col-10  d-flex justify-content-center align-items-end flex-column">
              <ul className="w-100 m-0 p-0 d-lg-flex d-none justify-content-xl-center justify-content-start list-unstyled">
                <li className="mx-xl-5 mx-lg-4">
                  <a href="">SERVICES</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">PACKAGES</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">ABOUT</a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a href="">CONTACT</a>
                </li>
              </ul>
              <HiMenuAlt3
                size={30}
                className="position-absolute d-lg-none d-block"
              ></HiMenuAlt3>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
