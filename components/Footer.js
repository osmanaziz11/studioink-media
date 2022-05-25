import { FaFacebookF } from "react-icons/Fa";
import { AiFillInstagram } from "react-icons/Ai";
import { AiFillYoutube } from "react-icons/Ai";
import { IoLogoWhatsapp } from "react-icons/Io";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid " id="footer">
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <img
              className=""
              src="/Logo.png"
              alt=""
              style={{ minWidth: "200px", maxWidth: "200px" }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <p className="text-center">
              <a href="">Services</a> / <a href="">Portfolio</a> /{" "}
              <a href="">About</a> / <a href="">Contact</a>
            </p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <p className="text-center">
              <FaFacebookF className="social_footer_icons mx-3" />
              <AiFillInstagram className="social_footer_icons mx-3" />
              <AiFillYoutube className="social_footer_icons mx-3" />
              <IoLogoWhatsapp className="social_footer_icons mx-3" />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">Powered by One|Man</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
