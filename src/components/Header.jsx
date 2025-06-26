import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleToggle = () => setShowMenu(!showMenu);

  const handleLinkClick = (id) => {
    setShowMenu(false);
    setActiveLink(id);  
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a href="#" className="nav__logo">Carlos Muleke</a>
        </motion.div>

        <motion.div
          className={`nav__menu ${showMenu ? "show" : ""}`}
          id="nav-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ul className="nav__list">
            {["home", "about", "skills", "contact"].map((id, idx) => (
              <motion.li
                className="nav__item"
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <a
                  href={`#${id}`}
                  className={`nav__link ${activeLink === id ? "active-link" : ""}`}
                  onClick={() => handleLinkClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
