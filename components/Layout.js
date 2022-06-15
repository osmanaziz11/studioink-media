import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Studioink | Photography `}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
