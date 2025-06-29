// File: src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profileImg from "../assets/images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,faWhatsapp,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <motion.h1
          className="home__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi,<br />I&apos;m <span className="home__title-color">Carlos Muleke</span>
          <br /> Front End  Developer
        </motion.h1>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/carlos-muleke-084552362" className="home__social-icon">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5' }} />
        </a>
        <a href="https://github.com/carlos45-dev" className="home__social-icon">
          <FontAwesomeIcon icon={faGithub} style={{ color: '#171515' }} />
        </a>
        <a href="https://wa.me/265992779377" className="home__social-icon">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
        </a>
        <a href="https://web.facebook.com/carlos.bathromew" className="home__social-icon">
          <FontAwesomeIcon icon={faFacebook } style={{ color: '#1877F2' }} />
         </a>
      </div>

      <div className="home__img">
        <svg
          className="home__blob"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />                     
            <image
              className="home__blob-img"
              x="50"
              y="60"
              href={profileImg}
              alt="Profile"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Home;
