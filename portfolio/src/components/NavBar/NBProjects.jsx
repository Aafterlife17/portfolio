import React from "react";
import { Link } from "react-router-dom";
import style from "./NBProjects.module.css";
import logonm from "./../../images/logonm.svg";
import linkedin from "./../../images/linkedin.svg";
import behance from "./../../images/behance.svg";
import github from "./../../images/github.svg";

const NBProjects = () => {
  return (
    <div className={style.box}>
      <div className={style.navbar}>
        <Link to="/">
          <img className={style.logo_nm} alt="Logo nm" src={logonm} />
        </Link>
        <div className={style.div_links}>
          <Link to="/">
            <div className={style.text_wrapper}>HOME</div>
          </Link>
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

export default NBProjects;
