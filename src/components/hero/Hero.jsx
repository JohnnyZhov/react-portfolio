import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IVAN ZHOVNYCH</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <Link
              to="portfolio"
              smooth={true}
              duration={500}
            >
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
            >
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </Link>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Versatile Resourceful Adaptable
      </motion.div>
      <div className="imageContainer">
        <img src="/hero3.png" alt="profile picture" />
      </div>
    </div>
  );
};

export default Hero;
