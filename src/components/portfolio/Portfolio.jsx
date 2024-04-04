import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Biz Benefits",
    link: "https://bizbenefits.ca/",
    img: "/Project4.png",
    desc: "Collaborating within a team and employing agile methodologies, we crafted a platform for a non-profit organization, leveraging the latest advancements in web development.",
  },
  {
    id: 2,
    title: "Optimiz",
    link: "https://www.optimiz.ca/",
    img: "/Project3.png",
    desc: "At Optimiz, I closely collaborated with ‘Florida Power and Light’ to construct a software for testing IVR systems using Python, Twilio's API, PostgreSQL and other tools.",
  },
  {
    id: 3,
    title: "St. Mary Cathedral website",
    link: "https://www.stmarytheprotectress.ca/",
    img: "/Project1.PNG",
    desc: " Webpage is created for St. Mary the Protectress Cathedral in Winnipeg. This website is built on the WIX platform, which is utilized as a constructor to expedite web development and streamline maintenance.",
  },
  {
    id: 4,
    title: "Church Choir website",
    link: "https://stmarytheprotectress.wixsite.com/churchchoir",
    img: "/Project2.PNG",
    desc: " Webpage is created for the choir at St. Mary the Protectress Cathedral in Winnipeg.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Go to page</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
