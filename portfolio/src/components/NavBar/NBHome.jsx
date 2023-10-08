import React from "react";
import style from "./NBHome.module.css";
import logonm from "./../../images/logonm.svg";
import linkedin from "./../../images/linkedin.svg";
import behance from "./../../images/behance.svg";
import github from "./../../images/github.svg";

const NBHome = () => {
  return (
    <div className={style.box}>
      <div className={style.navbar}>
        <img className={style.logo_nm} alt="Logo nm" src={logonm} />
        <div className={style.div_links}>
          <div className={style.text_wrapper}>ABOUT</div>
          <div className={style.text_wrapper_2}>SERVICES</div>
          <div className={style.text_wrapper_3}>PORTFOLIO</div>
          <div className={style.text_wrapper_4}>CONTACT</div>
        </div>
        <div className={style.div_rrss}>
          <a
            href="https://www.linkedin.com/in/nataliamalvicino/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.linkedin} alt="Linkedin" src={linkedin} />
          </a>
          <a
            href="https://www.behance.net/nataliamalvicino"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.behance} alt="Behance" src={behance} />
          </a>
          <a
            href="https://github.com/Aafterlife17"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.github} alt="Github" src={github} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NBHome;
