import { useEffect } from 'react';

const useScrollActive = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink?.classList.add("active-link");
        } else {
          sectionLink?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
};

export default useScrollActive;
