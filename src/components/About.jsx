import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="min-h-[220px] max-w-[210px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="rounded-[20px] bg-tertiary py-5 px-12 min-h-[240px] max-w-[220px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="object-contain w-14 h-14" />
          <h3 className="text-white text-[16px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Full-Stack Developer with expertise in building
        efficient and scalable web applications. My goal is to create seamless
        user experiences and bring innovative ideas to life.
      </motion.p>

      <div className="flex flex-wrap mt-20 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
