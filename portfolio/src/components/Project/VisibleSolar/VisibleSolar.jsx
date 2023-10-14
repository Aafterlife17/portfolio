import React from "react";
import style from "./VS.module.css";
import { Link } from "react-router-dom";
import {
  js_white,
  css_white,
  tth_img,
  arvako,
  fivemetrix,
  vs1,
  vs2,
  nourish,
  connected,
  easydrive,
  leansummits,
} from "./../../../assets/Images";
import Footer from "../../Footer/Footer";

const VisibleSolar = () => {
  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>Visible Solar · Landing Page</h1>
        <p className={style.subtitle}>UX/UI Design</p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          fermentum faucibus enim, suscipit porttitor lectus imperdiet in.
          Nullam id magna nec dolor tempor bibendum vel eu dui. Praesent eu dui
          eget libero faucibus pharetra. Vestibulum lorem sem, ultricies vel
          mollis eu, cursus ut turpis. Cras et ipsum vitae elit posuere
          tincidunt at in nibh. Phasellus tincidunt luctus odio quis vulputate.
          Maecenas volutpat hendrerit felis quis maximus. Fusce eget turpis sed
          arcu pellentesque aliquet quis in velit. Ut magna mauris, malesuada a
          turpis a, pretium feugiat sapien. Vivamus aliquam malesuada massa in
          pharetra. Aliquam eu interdum arcu. Fusce tempor ipsum et vestibulum
          feugiat. Morbi ac ex eu dui imperdiet cursus sed semper ligula.
        </p>
        <span className={style.techs_span}>
          This project was created using:
        </span>
        <div className={style.techs_container}>
          <div className={style.tech}>
            <img src={js_white} className={style.tech_img} alt="" />
            <span className={style.tech_span}>JavaScript</span>
          </div>
          <div className={style.tech}>
            <img src={css_white} className={style.tech_img} alt="" />
            <span className={style.tech_span}>CSS</span>
          </div>
        </div>

        <div className={style.images_container}>
          <img src={vs1} alt="visible solar 1" className={style.arvako1} />
          <img src={vs2} alt="visible solar 2" className={style.arvako1} />
        </div>

        <h2 className={style.title2}>See the live prototype</h2>

        <div className={style.proto_container}>
          <iframe
            title="connected"
            className={style.proto}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu7a4OoF3jYw7hXE24kHb0F%2FVisible-Solar%3Ftype%3Ddesign%26node-id%3D7-116%26t%3D8xLADPbq4lBR4MHc-1%26scaling%3Dscale-down-width%26page-id%3D7%253A115%26starting-point-node-id%3D7%253A116%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
        </div>

        {/* <button className={style.button}>
          <a href="https://arvako.com.ar/" target="_blank" rel="noreferrer">
            Click here to see the live project
          </a>
        </button> */}
        <h2 className={style.mightlike_title}>You also might like</h2>
      </div>
      <div className={style.mightlike}>
        <div className={style.mightlike_projects}>
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
          {/* <div className={style.project}>
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
          </div> */}
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
          <div className={style.project}>
            <img src={arvako} alt="arvako" />
            <div className={style.overlay}>
              <span>UX/UI Design</span>
              <h2>Arvako · Landing Page</h2>
              <button>
                <Link to="/arvako" className={style.button_tag}>
                  See more
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default VisibleSolar;
