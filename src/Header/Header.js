import Stev from "../images/Moi.png";
import "../Header/Header.css";
import Nav from "./Nav";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useInView } from "react-intersection-observer";
import '../Header/HeaderMobile.css'

const Header = () => {
  const el = useRef(null);
  const { ref: myRef, inView: visibleDiv } = useInView({ threshold: 0.15 });

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " I am a Web Developer,",
        "I am a Script Writer,",
        " I am an Actor,",
        "I deal on Art and Tech.",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="myDiv">
      <Nav />
      <div className="header__background">
        <div className="header__text">
          <Fade top>
            <h1>
              <img
                src="https://i.pinimg.com/originals/f9/13/46/f9134655b53cbeaeb00664b04371b9b0.png"
                alt="Hi"
                id="header__text__hi"
              />
              <span className="header__text__span">I'm Stephen Bernard.</span>
              <br />
            </h1>
          </Fade>
          <span
            ref={el}
            className="ref__span"
            style={{
              color: "yellow",
              fontSize: "23px",
              fontWeight: 900,
              letterSpacing: ".3rem",
              height:"60px"
            }}
          />
          <Zoom right>
            <p className="header__text__par1">
              I bring beautiful and complex designs to life 
            </p>
          </Zoom>
        </div>

        <div ref={myRef} style={{width:"200px"}}>
          <div className={`${"transform"} ${visibleDiv ? "visible__div" : ""}`}>
            <img
              src={Stev}
              alt="Stev"
              className="stev__pic"
              style={{ borderRadius: "6px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
