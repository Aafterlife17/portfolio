import React from "react";
import style from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import {
  tth_img,
  connected,
  fivemetrix,
  nourish,
  visiblesolar,
  arvako,
  easydrive,
  leansummits,
} from "./../../assets/Images";

const Portfolio = () => {
  return (
    <div className={style.section}>
      <h1>Latest Projects</h1>

      <div className={style.filter_buttons}>
        <button className={style.filter_button}>All projects</button>
        <button className={style.filter_button}>Brand Design</button>
        <button className={style.filter_button}>UX/UI Design</button>
        <button className={style.filter_button}>Web Development</button>
      </div>

      <div className={style.project_cards}>
        <div className={style.project}>
          <img src={tth_img} alt="tth img" />
          <div className={style.overlay}>
            <h2>Tech Talent Hub · Website</h2>
            <span>Front-end Development</span>
            <button>
              <Link to="/techtalenthub" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={connected} alt="connected" />
          <div className={style.overlay}>
            <h2>ConnectEd · App</h2>
            <span>UX/UI Design</span>
            <button>
              <Link to="/connected" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={fivemetrix} alt="fivemetrix" />
          <div className={style.overlay}>
            <h2>Five Metrix · Brand Book</h2>
            <span>Brand Design</span>
            <button>
              <Link to="/fivemetrix" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={nourish} alt="nourish" />
          <div className={style.overlay}>
            <h2>Nourish · Website</h2>
            <span>Full-stack Development</span>
            <button>
              <Link to="/nourish" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={visiblesolar} alt="visible solar" />
          <div className={style.overlay}>
            <h2>Visible Solar · Landing Page</h2>
            <span>UX/UI Design</span>
            <button>
              <Link to="/visiblesolar" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={arvako} alt="arvako" />
          <div className={style.overlay}>
            <h2>Arvako · Landing Page</h2>
            <span>UX/UI Design</span>
            <button>
              <Link to="/arvako" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={easydrive} alt="easy drive" />
          <div className={style.overlay}>
            <h2>EasyDrive · Landing Page</h2>
            <span>UX/UI Design</span>
            <button>
              <Link to="/easydrive" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
        <div className={style.project}>
          <img src={leansummits} alt="lean summits" />
          <div className={style.overlay}>
            <h2>Lean Summits · Landing Page</h2>
            <span>UX/UI Design</span>
            <button>
              <Link to="/leansummits" className={style.button_tag}>
                See more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
