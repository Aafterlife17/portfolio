import React from "react";
import style from "./About.module.css";
import {
  emoji,
  line,
  vectorBlanco,
  vectorNegro,
  divisor,
  vectorOutline,
  line2,
  download,
  meeting,
  react,
} from "./../../assets/Images";

const About = () => {
  return (
    <div className={style.section}>
      <div className={style.title}>
        <div className={style.title_h1}>
          <h1>
            Hello! <img src={emoji}></img> I'm Natalia.
          </h1>
        </div>
        <span className={style.title_span}>
          Graphic Designer · UX/UI Designer · Web Developer
        </span>
      </div>

      <div className={style.info}>
        <div className={style.cards}>
          <div className={style.cards_left}>
            <div className={style.card}>
              <h3 className={style.card_title}>DEVELOPMENT STACK</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>DESIGN STACK</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>SOFT SKILLS</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>CURRENTLY LEARNING</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>
          </div>
          <div className={style.cards_right}>
            <div className={style.card}>
              <h3 className={style.card_title}>ABOUT ME</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>HOBBIES</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>EDUCATION</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>

            <div className={style.card}>
              <h3 className={style.card_title}>WORK EXPERIENCE</h3>
              <img
                className={style.vectorNegro}
                alt="vectorNegro"
                src={vectorNegro}
              />
            </div>
          </div>
        </div>

        <img className={style.divisor} alt="Divisor" src={divisor} />

        <div className={style.info_box}>
          <div className={style.info_content}>
            <h3 className={style.card_title}>DEVELOPMENT STACK</h3>
            <div className={style.box_elements}>
              <div className={style.element}>
                <img src={react}></img>
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.contact_buttons}>
        <button className={style.contact_button}>
          Development Certificate{" "}
          <img className={style.button_image} src={download}></img>
        </button>
        <button className={style.contact_button}>
          Design Certificate{" "}
          <img className={style.button_image} src={download}></img>
        </button>
        <button className={style.contact_button}>
          Curriculum Vitae{" "}
          <img className={style.button_image} src={download}></img>
        </button>
        <button className={style.contact_button}>
          Let's have a meeting{" "}
          <img className={style.button_image} src={meeting}></img>
        </button>
      </div>

      <div className={style.welcome_tag}>
        <img className={style.line} alt="Line" src={line2} />
        <img className={style.img} alt="vectorOutline" src={vectorOutline} />
        <div className={style.text_wrapper2}>about</div>
      </div>
    </div>
  );
};

export default About;
