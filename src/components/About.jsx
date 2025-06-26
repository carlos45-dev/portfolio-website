const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="assets/img/about.jpg" alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">I&apos;m Carlos</h2>
          <p className="about__text">
             A front-end developer with two certifications and a strong passion for building modern, responsive websites. Currently in my third year studying Computer Science at the University of Malawi, I focus on creating clean, user-friendly interfaces while continuously expanding my skills in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
