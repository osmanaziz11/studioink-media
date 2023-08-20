import Link from 'next/link';
import styles from '../styles/sideMenu.module.css';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { navContext } from '../pages/_app.js';
const Menu = () => {
  const router = useRouter();
  const navToggle = useContext(navContext);
  return (
    <div
      className={`container-fluid end-0 d-lg-none d-block ${
        !navToggle.NavStatus && 'opacity-100 visible'
      } ${styles.main__container} position-fixed`}
    >
      <div className="row h-100">
        <div className="col h-100">
          <ul className="list-unstyled p-0 d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <li className="my-3">
              <Link href="/">
                <a className={router.pathname == '/' ? 'activeRoute' : ''}>
                  HOME
                </a>
              </Link>
            </li>
            <li className="my-3">
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
            <li className="my-3">
              <Link href="/wedding">
                <a
                  className={router.pathname == '/wedding' ? 'activeRoute' : ''}
                >
                  WEDDING
                </a>
              </Link>
            </li>
            <li className="my-3">
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

            <li className="my-3">
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
            <li className="my-3">
              <Link href="/gallery">
                <a
                  className={router.pathname == '/gallery' ? 'activeRoute' : ''}
                >
                  GALLERY
                </a>
              </Link>
            </li>
            <li className="my-3">
              <Link href="/about">
                <a className={router.pathname == '/about' ? 'activeRoute' : ''}>
                  ABOUT
                </a>
              </Link>
            </li>
            <li className="my-3">
              <Link href="/contact">
                <a
                  className={router.pathname == '/contact' ? 'activeRoute' : ''}
                >
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;