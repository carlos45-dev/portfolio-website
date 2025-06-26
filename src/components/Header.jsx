import React, { useState, useEffect } from "react";

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
        <div>
          <a href="#" className="nav__logo">Carlos Muleke</a>
        </div>

        <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {["home", "about", "skills", "contact"].map((id) => (
              <li className="nav__item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${activeLink === id ? "active-link" : ""}`}
                  onClick={() => handleLinkClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
