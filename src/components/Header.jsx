import React from "react";

function Header() {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Carlos Muleke</a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {["home", "about", "skills", "contact"].map((id) => (
              <li className="nav__item" key={id}>
                <a href={`#${id}`} className={`nav__link ${id === "home" ? "active-link" : ""}`}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
