import { motion } from "framer-motion";
import work from "../assets/images/work.jpg"; 

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <motion.h2
            className="skills__subtitle"
            initial ={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Professional Skills
          </motion.h2>
          <motion.p
            className="skills__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I have experience with HTML, CSS, JavaScript, and React, along with
            version control tools like Git and GitHub. These skills enable me to
            build clean, interactive web interfaces and collaborate effectively in
            team-based development environments. Click {'\u00A0'}
            <a
              href="https://www.linkedin.com/in/carlos-muleke-084552362"
              style={{ color: "#c084fc" }}
            >here👈{'\u00A0'}
            </a>
            to see my certifications.
          </motion.p>

          {/* Animate each skill bar */}
          {[
            { icon: "bx bxl-html5", name: "HTML5", bar: "skills__html", percent: "95%" },
            { icon: "bx bxl-css3", name: "CSS3", bar: "skills__css", percent: "85%" },
            { icon: "bx bxl-javascript", name: "JavaScript", bar: "skills__js", percent: "65%" },
            { icon: "bx bxs-paint", name: "React", bar: "skills__ux", percent: "85%" },
            { icon: "bx bxs-paint", name: "Git", bar: "skills__ux", percent: "99%" },
          ].map((skill, index) => (
            <motion.div
              className="skills__data"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skills__names">
                <i className={`${skill.icon} skills__icon`}></i>
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className={`skills__bar ${skill.bar}`}></div>
              <div>
                <span className="skills__percentage">{skill.percent}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <img src={work} alt="skill" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
