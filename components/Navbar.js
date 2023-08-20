import Link from 'next/link';
import { useRouter } from 'next/router';
import { Rotate as Hamburger } from 'hamburger-react';
import style from '../styles/navbar.module.css';
import { navContext } from '../pages/_app';
import { useContext } from 'react';

import { useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const navToggle = useContext(navContext);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      if (navToggle.NavStatus) {
        console.log('object');
        document.getElementsByClassName('hamburger-react')[0].click();
      }
    });
  }, [router.events]);

  return (
    <>
      <nav
        className="position-sticky top-0 bg-white"
        style={{ zIndex: '99999999999' }}
      >
        <div className="container-fluid shadow" id={style.navbar}>
          <div className="row px-xl-5 py-3 px-3">
            <div className="col-lg-5 col-0 pe-0  d-flex justify-content-center flex-column">
              <ul className="w-100 m-0 p-0 d-lg-flex d-none justify-content-xl-center nav_1 justify-content-end list-unstyled">
                <li className="me-xl-5 me-lg-4">
                  <Link href="/">
                    <a className={router.pathname == '/' ? 'activeRoute' : ''}>
                      HOME
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/portfolio">
                    <a
                      className={
                        router.pathname == '/portfolio' ? 'activeRoute' : ''
                      }
                    >
                      PORTFOLIO
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/wedding">
                    <a
                      className={
                        router.pathname == '/wedding' ? 'activeRoute' : ''
                      }
                    >
                      WEDDING
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/packages">
                    <a
                      className={
                        router.pathname == '/packages' ? 'activeRoute' : ''
                      }
                    >
                      PACKAGES
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-2 col-2 px-0 pe-2 position-relative  d-flex justify-content-start"
              style={{ height: '60px' }}
            >
              <img src="/Logo.png" alt="" />
            </div>
            <div className="col-lg-5 col-10 pe-lg-1 pe-0   d-flex justify-content-center align-items-end flex-column">
              <ul className="w-100 m-0 p-0 d-lg-flex d-none justify-content-xl-center nav_2 justify-content-start list-unstyled">
                <li className="mx-xl-5 mx-lg-4">
                  <Link href="/offerings">
                    <a
                      className={
                        router.pathname == '/offerings' ? 'activeRoute' : ''
                      }
                    >
                      OFFERINGS
                    </a>
                  </Link>
                </li>
                <li className="me-xl-5 me-lg-4">
                  <Link href="/gallery">
                    <a
                      className={
                        router.pathname == '/gallery' ? 'activeRoute' : ''
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
                        router.pathname == '/about' ? 'activeRoute' : ''
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
                        router.pathname == '/contact' ? 'activeRoute' : ''
                      }
                    >
                      CONTACT
                    </a>
                  </Link>
                </li>
              </ul>

              <span id="ab" className="position-absolute d-lg-none d-block">
                <Hamburger
                  id="hamburger"
                  size={30}
                  distance="sm"
                  onToggle={() => navToggle.setNavStatus(!navToggle.NavStatus)}
                ></Hamburger>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;