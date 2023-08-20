import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import style from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid shadow" id={style.footer}>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center ">
            <img
              className=""
              src="/Logo.png"
              alt=""
              style={{ minWidth: '200px', maxWidth: '200px' }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <p className={`text-center `}>Home / Portfolio / About / Contact</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="text-center">
              <FaFacebookF
                className={`${style.social_footer_icons} ${style.facebook} mx-2`}
              />
              <AiFillInstagram
                className={`${style.social_footer_icons} ${style.insta} mx-2`}
              />
              <AiFillYoutube
                className={`${style.social_footer_icons} ${style.youtube} mx-2`}
              />
              <IoLogoWhatsapp
                className={`${style.social_footer_icons} ${style.insta} mx-2`}
              />
            </p>
          </div>
        </div>
        <div className={`row ${style.endLine} p-3`}>
          <div className="col ">
            <p className="text-center">Powered by Osman</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;