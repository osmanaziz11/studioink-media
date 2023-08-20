import { useRouter } from 'next/router';
import { useState, useEffect, createContext } from 'react';

// Css Modules
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import AOS from 'aos';

// Custom Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingBar from 'react-top-loading-bar';
import FloatingWhatsApp from 'react-floating-whatsapp';
import WhatsApp from '../components/whatsapp';

const navContext = createContext();

function MyApp({ Component, pageProps }) {
  const openWhatsApp = () => {
    console.log(`object`);
  };
  const [progress, setProgress] = useState(0);
  const [NavStatus, setNavStatus] = useState('False');
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(20);
    });
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
  }, [router.events]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <navContext.Provider value={{ NavStatus, setNavStatus }}>
        <Navbar />

        <FloatingWhatsApp />
        <WhatsApp />

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
      </navContext.Provider>
    </>
  );
}

export default MyApp;
export { navContext };