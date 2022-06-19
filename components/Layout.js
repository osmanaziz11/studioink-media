import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Studioink | Photography `}</title>
      </Head>
      {children}
    </>
  );
};
export default Layout;
