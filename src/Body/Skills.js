import Typed from "typed.js";
import { useEffect, useRef } from "react";
import html from "../images/html logo.png";
import css from "../images/css-img.png";
import tailwind from "../images/tailwind.png";
import react from "../images/reactImg.png";
import js from "../images/js_logo.png";
import redux from "../images/redux-img.png";
import ts from "../images/typescript.png";
import git from "../images/git-img.png";
import material_ui from "../images/material_ui.png";
import trelby from "../images/trelby.jpeg";
import "./Skills.css";
import Bounce from "react-reveal/Bounce";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const el = useRef(null);
  const { ref: myRef, inView: visibleDiv } = useInView({ threshold: .15 });

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Are you in doubt of my skills?", "Here they are!!"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="skills">
      <Bounce top>
        <div className="skills__head">
          <span
            ref={el}
            style={{
              color: "black",
              fontSize: "35px",
              fontWeight: 900,
              letterSpacing: ".3rem",
              fontFamily: "monospace",
            }}
          />
        </div>
      </Bounce>
      <div className="skills__body" ref={myRef}>
        <div
          className={`${"skills__body__item"} ${visibleDiv ? "show" : "out"}`}
        >
          <img src={html} alt="html-logo" />
          <img src={css} alt="css-logo" />
          <img src={tailwind} alt="tailwind-logo" />
          <img src={material_ui} alt="material_ui-logo" />
          <img src={js} alt="js-logo" />
          <img src={react} alt="react-logo" />
          <img src={redux} alt="redux-logo" />
          <img src={ts} alt="typescript-logo" />
          <img src={git} alt="git-logo" />
          <img src={trelby} alt="trelby-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
