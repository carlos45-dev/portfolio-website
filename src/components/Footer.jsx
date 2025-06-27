import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Carlos Muleke</p>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/carlos-muleke-084552362" className="footer__icon">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5' }} />
        </a>
        <a href="https://github.com/carlos45-dev" className="footer__icon">
          <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
        </a>
        <a href="https://wa.me/265992779377" className="footer__icon">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
        </a>
        <a href="https://web.facebook.com/carlos.bathromew" className="footer__icon">
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
        </a>
      </div>
      <p className="footer__copy">&#169; Carlos Muleke. All rights reserved</p>
    </footer>
  );
};

export default Footer;
