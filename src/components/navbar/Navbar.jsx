import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Full Stack Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100001315116824">
            <img src="/facebook.png" alt="facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/ivan-zhovnych-644074208/">
            <img src="/linkedin.png" alt="linkedin icon" />
          </a>
          {/* <a href="#">
            <img src="/youtube.png" alt="" />
          </a> */}
          <a href="https://johnnyzhov.github.io/cv/">
            <img src="/dribbble.png" alt="web icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
