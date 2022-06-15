import { useRouter } from "next/router";

// Import Components
import Layout from "../../components/Layout";

// Import Css Modules
import style from "../../styles/gallery.module.css";

const Chapter = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  return (
    <Layout title="Gallery">
      <div className={`container-fluid ${style.galleryContainer} my-3`}>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className={` ${style.bar}`}></div>
            <h5 className="mx-3 my-2">GALLERIES</h5>
            <div className={` ${style.bar}`}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className={`text-center my-2`}>Explore my work</h1>
          </div>
        </div>
        \
      </div>
    </Layout>
  );
};
export default Chapter;
