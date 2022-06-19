import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Studioink | Photography `}</title>
      </Head>
      <div className="container-fluid " style={{ maxWidth: "1500px" }}>
        {children}
      </div>
    </>
  );
};
export default Layout;
