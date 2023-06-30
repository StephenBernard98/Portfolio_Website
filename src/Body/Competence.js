import Writer from "../images/script-writer.png";
import Director from "../images/director.jpg";
import Software from "../images/software.jpg";
import Thumbs from "../images/emoji-thumbs-up.gif";
import "./Competence.css";
import Rotate from "react-reveal/Rotate";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useState, useEffect } from "react";
import HeadShake from "react-reveal/HeadShake";

const Competence = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 230) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="comp">
      <Rotate bottom right>
        <h1>
          Perfect Work <span className="comp__span">===</span>{" "}
          <span className="comp__span2">Happy Customers!!!</span>
          <img src={Thumbs} alt="" />
        </h1>
        <div className="competence">
          <div className="box boxes">
            <img src={Software} alt="" />
            <p>
              I build stunning, interactive and responsive websites and web apps
              according to client's request
            </p>
          </div>
          <div className="box boxes">
            <img src={Writer} alt="" />
            <p>
              I write captivating and heartfelt stories that gifts the most
              thrilling emotions required
            </p>
          </div>
          <div className="box">
            <img src={Director} alt="" />
            <p>
              I direct movies and plays to present on stage and the big screens
              to bring to the audience the thoughts of the producer and writer
            </p>
          </div>
        </div>
      </Rotate>
      <div className="icons">
        <HeadShake>
          <FaFacebook className={`myStyle ${show && "myStyle__black"}`} />
          <BsInstagram className={`myStyle ${show && "myStyle__black"}`} />
          <BsWhatsapp className={`myStyle ${show && "myStyle__black"}`} />
        </HeadShake>
      </div>
    </div>
  );
};

export default Competence;
