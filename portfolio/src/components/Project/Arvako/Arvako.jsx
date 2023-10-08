import React from "react";
import style from "./Arvako.module.css";
import { js_white } from "./../../../assets/Images";

const Arvako = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Arvako · Landing Page</h1>
      <p className={style.subtitle}>UX/UI Design</p>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum
        faucibus enim, suscipit porttitor lectus imperdiet in. Nullam id magna
        nec dolor tempor bibendum vel eu dui. Praesent eu dui eget libero
        faucibus pharetra. Vestibulum lorem sem, ultricies vel mollis eu, cursus
        ut turpis. Cras et ipsum vitae elit posuere tincidunt at in nibh.
        Phasellus tincidunt luctus odio quis vulputate. Maecenas volutpat
        hendrerit felis quis maximus. Fusce eget turpis sed arcu pellentesque
        aliquet quis in velit. Ut magna mauris, malesuada a turpis a, pretium
        feugiat sapien. Vivamus aliquam malesuada massa in pharetra. Aliquam eu
        interdum arcu. Fusce tempor ipsum et vestibulum feugiat. Morbi ac ex eu
        dui imperdiet cursus sed semper ligula.
      </p>
      <span className={style.techs_span}>This project was created using:</span>
      <div className={style.techs_container}>
        <div className={style.tech}>
          <img src={js_white} className={style.tech_img} />
          <span className={style.tech_span}>JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Arvako;
