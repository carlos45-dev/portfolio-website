import { motion } from "framer-motion";
import profile from "../assets/images/profile2.jpg"; 

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={profile} alt="" className="remove" />
        </div>

        <div>
          <motion.h2
            className="about__subtitle"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            I&apos;m Carlos
          </motion.h2>
          <motion.p
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A front-end developer with  certifications and a strong passion for
            building modern, responsive websites. Currently in my third year
            studying Computer Science at the University of Malawi, I focus on
            creating clean, user-friendly interfaces while continuously expanding
            my skills in web development.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
