import AOS from "aos";
import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
