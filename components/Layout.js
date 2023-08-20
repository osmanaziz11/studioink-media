import Head from 'next/head';
import Menu from './sideMenu';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Studioink | Photography `}</title>
      </Head>
      <div
        className="container-fluid position-relative Layout-container"
        style={{ maxWidth: '1500px', overflowX: 'hidden' }}
      >
        <Menu />
        {children}
      </div>
    </>
  );
};
export default Layout;
