import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const openWhatsApp = () => {
    document.getElementById('whatsApp').click();
  };
  return (
    <>
      <div className="styles-module_floatingWhatsapp__1akvz custom-class">
        <ReactWhatsapp
          id="whatsApp"
          number="+447405389598"
          message="Hello!"
          className="d-none"
        />
        <div
          className="btn-whatsapp-pulse btn-whatsapp-pulse-border shadow"
          onClick={openWhatsApp}
        >
          <FaWhatsapp />
        </div>
      </div>
    </>
  );
};
export default WhatsApp;
