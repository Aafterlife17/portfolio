import React from "react";
import style from "./Footer.module.css";
import { logonm, linkedin, behance, github } from "./../../assets/Images";

const Footer = () => {
  return (
    <div className={style.section}>
      <div className={style.content}>
        <img src={logonm} alt="logo nm" className={style.logonm} />
        <div className={style.div_rrss}>
          <img className={style.linkedin} alt="Linked in" src={linkedin} />
          <img className={style.behance} alt="Behance" src={behance} />
          <img className={style.github} alt="Git hub" src={github} />
        </div>
      </div>
      <span className={style.span}>
        © All rights reserved | Natalia Malvicino 2023
      </span>
    </div>
  );
};

export default Footer;
