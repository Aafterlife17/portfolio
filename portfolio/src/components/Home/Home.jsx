import React from "react";
import style from "./Home.module.css";
import { vectorBlanco, line } from "../../assets/Images";
import About from "./../About/About";
import Services from "../Services/Services";
import Portfolio from "./../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const Landing = () => {
  return (
    <div>
      {/* // HERO */}
      <div className={style.box}>
        <div className={style.title_hero_total}>
          <div className={style.overlap2}>
            <div className={style.title_hero}>
              <div className={style.overlap_group2}>
                <div className={style.main_title}>
                  Bring your <br />
                  vision to
                </div>
                <div className={style.life_word}>life</div>
              </div>
            </div>
            <img
              className={style.vectorBlanco}
              alt="vectorBlanco"
              src={vectorBlanco}
            />
          </div>
        </div>
        <div className={style.welcome_section}>
          <p className={style.subtitle_hero}>
            Beautiful websites / captivating graphics /<br />
            personalized interfaces
          </p>
          <div className={style.seemore_btn}>
            <div className={style.overlap_group}>
              <div className={style.text_wrapper}>See more</div>
              <div className={style.rectangle} />
            </div>
          </div>
          <div className={style.contactme_btn}>
            <div className={style.overlap}>
              <div className={style.text_wrapper}>Contact me</div>
              <div className={style.div} />
            </div>
          </div>
          <div className={style.welcome_tag}>
            <img className={style.line} alt="Line" src={line} />
            <img className={style.img} alt="vectorBlanco" src={vectorBlanco} />
            <div className={style.text_wrapper2}>welcome</div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div>
        <About />
      </div>

      {/* SERVICES */}
      <div>
        <Services />
      </div>

      {/* PORTFOLIO */}
      <div>
        <Portfolio />
      </div>

      {/* CONTACT */}
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
