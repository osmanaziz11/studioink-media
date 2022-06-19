import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "../styles/globals.css";
import "../public/assects/css/style.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(20);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.events]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <LoadingBar
        color="#222222"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={2}
        shadow={true}
        background="transparent"
        waitingTime={400}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
