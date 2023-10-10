import React, { useContext } from "react";
import "./Intro.css";
import BG1 from "../../img/bg1.png"
import BG2 from "../../img/bg2.png"
import BG3 from "../../img/bg3.png"
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Deepak from "../../img/deepak.png"
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GithubURL, InstaURL, LinkedInURL } from "../../constants/myurls";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Deepak Madambi</span>
          <span>
            A passionate Software Engineer and Creative Technologist, dedicated to crafting innovative solutions. Join me as we explore a world where code transforms into art and ideas come to life.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          
          
          <a href={LinkedInURL} target={"_blank"}><img src={LinkedIn} alt="" /></a>
          <a href={InstaURL}  target={"_blank"} ><img src={Instagram} alt="" /></a>
          <a href={GithubURL}  target={"_blank"} ><img src={Github} alt="" /></a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={BG1} alt="" />
        <img src={BG3} alt="" />
        <img src={Deepak} alt="" height={"80%"} />
        <img src={BG3} height={"10%"} />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Mentor" text2="" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Software Engineer" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
