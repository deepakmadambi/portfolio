import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import { InstaURL, LinkedInURL } from "../../constants/myurls";

const Footer = () => {
  const openURL = (url) => {
    if (url != "") {
      window.open(url, '_blank');
    }
  }

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span >deepakmadambi8@gmail.com</span>
        <div className="f-icons">
          <LinkedIn color="white" size={"3rem"} id="LinkedInIcon" onClick={ () => openURL(LinkedInURL)} />
          <Insta color="white" size={"3rem"} id="InstaIcon" onClick={ () => openURL(InstaURL)} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
