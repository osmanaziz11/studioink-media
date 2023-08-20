import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

const Parallax = ({ children, src, speed }) => {
  console.log(src, speed);
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: `${src}`,
            speed: `${speed}`,
          },
        ]}
        className="aspect-[2/1] h-100"
      >
        {children}
      </ParallaxBanner>
    </ParallaxProvider>
  );
};
export default Parallax;
