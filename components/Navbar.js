import Link from "next/link";
import { useRouter } from "next/router";

import style from "../styles/navbar.module.css";

import { HiMenuAlt3 } from "react-icons/Hi";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <div className="container-fluid shadow" id={style.navbar}>
          <div className="row px-xl-5 py-3 px-3">
            <div className="col-lg-5 col-0 pe-0  d-flex justify-content-center flex-column">
              <ul className="w-100 m-0 p-0 d-lg-flex d-none justify-content-xl-center justify-content-end list-unstyled">
                <li className="me-xl-5 me-lg-4">
                  <Link href="/">
                    <a className={router.pathname == "/" ? "activeRoute" : ""}>
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname == "/portfolio" ? "activeRoute" : ""
                      }
                    >
                      PORTFOLIO
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <a
                    className={
                      router.pathname == "/wedding" ? "activeRoute" : ""
                    }
                  >
                    WEDDING
                  </a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/packages">
                    <a
                      className={
                        router.pathname == "/packages" ? "activeRoute" : ""
                      }
                    >
                      PACKAGES
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-2 px-0 pe-2  d-flex justify-content-start">
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
                  <a
                    className={
                      router.pathname == "/services" ? "activeRoute" : ""
                    }
                  >
                    SERVICES
                  </a>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/gallery">
                    <a
                      className={
                        router.pathname == "/gallery" ? "activeRoute" : ""
                      }
                    >
                      GALLERY
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about" ? "activeRoute" : ""
                      }
                    >
                      ABOUT
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname == "/contact" ? "activeRoute" : ""
                      }
                    >
                      CONTACT
                    </a>
                  </Link>
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
