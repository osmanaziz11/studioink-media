/* eslint-disable @next/next/no-img-element */
import style from '../styles/gallery.module.css';

const Instafeed = ({ posts }) => {
  return (
    <>
      {/* Instagram Feed   */}
      <div className={`container ${style.galleryContainer}`}>
        <div className="row my-5">
          <div className="col">
            <div className="container p-0">
              <div className="row">
                {posts
                  ? posts.map((post) => {
                      return (
                        <div
                          className="col-xl-3 col-md-4 col-sm-6 mb-3 "
                          key={post.id}
                        >
                          {
                            <a
                              href={post.permalink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className={`${style.items} shadow `}>
                                {/* item Thumbnail */}
                                <div
                                  className={`${style.thumbnail} position-relative p-3 bg-white shadow`}
                                >
                                  <img
                                    src={
                                      post.mediaType === 'IMAGE'
                                        ? post.mediaUrl
                                        : post.thumbnailUrl
                                    }
                                    alt=""
                                    className="hoverEffect"
                                  />
                                </div>
                              </div>
                            </a>
                          }
                        </div>
                      );
                    })
                  : 'No Posts'}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a
              href="https://www.instagram.com/studioink_/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={`px-5 py-2 rounded shadow ${style.instaBtn}`}>
                Follow Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instafeed;