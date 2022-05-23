import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
