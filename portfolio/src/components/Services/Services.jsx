import React from "react";
import style from "./Services.module.css";
import { vectorOutline } from "./../../assets/Images";

const Services = () => {
  return (
    <div className={style.section}>
      <h1>My expertise</h1>
      <div className={style.services_container}>
        <div className={style.service}>
          <div className={style.title}>
            <h2 className={style.number}>01</h2>
            <h2 className={style.h2}>Multimedia Design</h2>
            <img
              className={style.vector}
              src={vectorOutline}
              alt="vector Negro"
            />
          </div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam ante nec lobortis pretium. In faucibus arcu
            arcu, in ultricies velit ultrices ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <h2 className={style.number}>02</h2>
            <h2 className={style.h2}>UX/UI Design</h2>
            <img
              className={style.vector}
              src={vectorOutline}
              alt="vector Negro"
            />
          </div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam ante nec lobortis pretium. In faucibus arcu
            arcu, in ultricies velit ultrices ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <h2 className={style.number}>03</h2>
            <h2 className={style.h2}>Web Development</h2>
            <img
              className={style.vector}
              src={vectorOutline}
              alt="vector Negro"
            />
          </div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam ante nec lobortis pretium. In faucibus arcu
            arcu, in ultricies velit ultrices ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <h2 className={style.number}>04</h2>
            <h2 className={style.h2}>Brand Design</h2>
            <img
              className={style.vector}
              src={vectorOutline}
              alt="vector Negro"
            />
          </div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam ante nec lobortis pretium. In faucibus arcu
            arcu, in ultricies velit ultrices ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
