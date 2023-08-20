/* eslint-disable @next/next/no-img-element */
// Components
import { useRouter } from 'next/router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// Custom Components
import Layout from '../../components/Layout';

// Css Modules
import style from '../../styles/gallery.module.css';

// Json Objects
import Photos from '../../website-data/gallery/photos';

const Chapter = ({ posts }) => {
  const router = useRouter();
  const chapter = router.query.chapter;
  return (
    <>
      {Photos.map((photos, index) => {
        return (
          <div key={index}>
            {photos.foldername === chapter && (
              <Layout title={`Gallery - ${photos.title}`}>
                <div className={`${style.galleryContainer} mt-5`}>
                  <div className="row mt">
                    <div className="col d-flex justify-content-center align-items-center">
                      <h5 className="mx-3 globalPgeSubHeading">{`- ${photos.year} -`}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h1 className={`text-center`}>{photos.title}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <p
                        className="text-center mb-3 "
                        style={{ width: '500px' }}
                      >
                        {photos.desc}
                      </p>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col">
                      <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                      >
                        <Masonry gutter="10px">
                          {photos.album.map((img, index) => {
                            return (
                              <img
                                key={index}
                                data-aos="zoom-in"
                                src={`/assects/img/gallery/${photos.foldername}/${img}`}
                                alt=""
                                style={{ width: '100%', display: 'block' }}
                                className="shadow rounded"
                              />
                            );
                          })}
                        </Masonry>
                      </ResponsiveMasonry>
                    </div>
                  </div>
                </div>
              </Layout>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Chapter;
