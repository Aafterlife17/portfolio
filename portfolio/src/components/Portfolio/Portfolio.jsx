import React from "react";
import style from "./Portfolio.module.css";
import {
  tth_img,
  connected,
  fivemetrix,
  nourish,
  visiblesolar,
  arvako,
} from "./../../assets/Images";

const Portfolio = () => {
  return (
    <div className={style.section}>
      <h1>Latest Projects</h1>

      <div className={style.filter_buttons}>
        <button className={style.filter_button}>All projects</button>
        <button className={style.filter_button}>Graphic Design</button>
        <button className={style.filter_button}>UX/UI Design</button>
        <button className={style.filter_button}>Web Development</button>
      </div>

      <div className={style.project_cards}>
        <div className={style.project}>
          <img src={tth_img} alt="tth img"></img>
        </div>
        <div className={style.project}>
          <img src={connected} alt="tth img"></img>
        </div>
        <div className={style.project}>
          <img src={fivemetrix} alt="tth img"></img>
        </div>
        <div className={style.project}>
          <img src={nourish} alt="tth img"></img>
        </div>
        <div className={style.project}>
          <img src={visiblesolar} alt="tth img"></img>
        </div>
        <div className={style.project}>
          <img src={arvako} alt="tth img"></img>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
