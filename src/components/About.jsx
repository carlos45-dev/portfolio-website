import { motion } from "framer-motion";
import profile from "../assets/images/profile2.png"; 

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
            Passionate and driven 3rd year Computer Science student at 
            the University of Malawi with hands on experience in full 
            stack development using React.js, Next.js, Node.js, 
            and Flutter. I have independently and collaboratively 
            built and deployed real world web applications. 
            I am an active member of the university's Computing Society, 
            committed to leveraging technology to solve meaningful problems 
            at a local and international level. I thrive in collaborative 
            environments and am constantly expanding my skills to become a 
            globally competitive software developer.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
