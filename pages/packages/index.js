// custom components
import Layout from '../../components/Layout';

// Json Objects
import PackagesData from '../../website-data/packages/packages';

// Css Module
import styles from '../../styles/packages.module.css';

import { BiPound } from 'react-icons/bi';
import Image from 'next/image';

const Packages = () => {
  return (
    <Layout title="Packages">
      <div className={styles.packageContainer}>
        {/* Heading  */}
        <div className="row mt-5">
          <div className="col">
            <h5 className="text-center globalPgeSubHeading">- 2022 -</h5>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center globalPgeHeading">Pricing Guide</h1>

            <p
              style={{
                minWidth: '270px',
                maxWidth: '35%',
              }}
              className="text-center mt-3"
            >
              Discount are offered on multiple days bookings, Select any option
              of your choice and contact me to get your Quote.
            </p>
          </div>
        </div>

        {/* Packages  */}
        <div className="row">
          {PackagesData &&
            PackagesData.map((pkg, index) => {
              return (
                <div className={`col-md-6 mb-4 `} key={index}>
                  <div
                    className={`${styles.imgContainer} position-relative p-0`}
                  >
                    <img
                      src={pkg.thumbnail}
                      alt="Image"
                      className="position-absolute top-0 start-0"
                    />

                    <div className={`${styles.transparent} p-sm-4 p-2`}>
                      <div>
                        <h4 className="text-center">{pkg.title}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="rates w-100 flex-column justify-content-center align-items-center d-flex">
                    <h3 className="text-center globalPgeHeading">
                      <BiPound />
                      {`${pkg.price}`}
                    </h3>
                    <h6 className="text-center globalPgeSubHeading ">
                      - INCLUDES -
                    </h6>
                    <p className="px-md-5 px-sm-3 px-2 text-center">
                      {pkg.desc}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* Discount Window  */}
        {/* <div className="row my-5 p-0">
          <div className={`col p-0`}>
            <div className="container-fluid">
              <div className="row p-0">
                <div className={`col-12 p-0 ${styles.discountWindow}`}>
                  <div
                    className={`${styles.imgContainer} h-100 position-relative p-0`}
                  >
                    <Image
                      src="https://res.cloudinary.com/ozecloud/image/upload/v1657084424/studioink-media-assects/images/home/1_tbmh2s.jpg"
                      alt="image"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/ozecloud/image/upload/e_blur:438/v1657113931/studioink-media-assects/images/home/136737052_3027897840776769_9158931925401818452_n_esosbr.jpg"
                      objectFit="cover"
                      objectPosition="center"
                    ></Image>

                    <div className={`${styles.transparent} p-4`}>
                      <div>
                        <h2
                          className="text-center globalPgeHeading position-absolute"
                          style={{ maxWidth: '700px' }}
                        >
                          Discount are offered on multiple days bookings, Select
                          any option of your choice and contact me to get your
                          Quote.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};
export default Packages;
