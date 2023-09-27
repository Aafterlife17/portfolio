import React from "react";
import style from "./NBProjects.module.css";
import logonm from "./../../images/logonm.svg";
import linkedin from "./../../images/linkedin.svg";
import behance from "./../../images/behance.svg";
import github from "./../../images/github.svg";

const NBProjects = () => {
  return (
    <div className={style.box}>
      <div className={style.navbar}>
        <img className={style.logo_nm} alt="Logo nm" src={logonm} />
        <div className={style.div_links}>
          <div className={style.text_wrapper}>HOME</div>
        </div>
        <div className={style.div_rrss}>
          <img className={style.linkedin} alt="Linked in" src={linkedin} />
          <img className={style.behance} alt="Behance" src={behance} />
          <img className={style.github} alt="Git hub" src={github} />
        </div>
      </div>
    </div>
  );
};

export default NBProjects;
