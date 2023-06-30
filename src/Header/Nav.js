import { useState, useEffect, useRef } from "react";
import "../Header/Nav.css";
import "../Header/NavMobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Header/Navs.css";

const Navs = () => {
  const [show, handleShow] = useState(false);
  const ref = useRef(null);
  const [styles, setStyles] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  
  const handleClose = () => {
    setStyles(false)    
    document.getElementById("navs").style.width = "0%";
  };

  const handleFirstClick = () => {
    var element = document.querySelector(".myDiv");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // handleClose()
  };

  const handleClick = () => {
    var element = document.querySelector(".about");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // handleClose()
  };

  const handleClicks = () => {
    var element = document.querySelector(".skills");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // handleClose()
  };

  const handleClickFired = () => {
    var element = document.querySelector(".project");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // handleClose()
  };

  const handleClicksFired = () => {
    var element = document.querySelector(".message__section");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // handleClose()
  };

  const handleDisplay = () => {
    document.getElementById("navs").style.width = "50%";
  };


  return (
    <div>
      <div className="nav">
        <div id="navs" className={`navs ${show && "nav_black"}`}>
          <div className="navs__header">
            <p onClick={handleClose} className="close__side__nav">
              {" "}
              &#x2715;
            </p>
            <h1 onClick={handleFirstClick}>
              {" "}
              <i>Stephen</i>{" "}
              <span className="navs__header___span">Bernard</span>{" "}
            </h1>
          </div>

          <div className="navs__list">
            <ul>
              <li onClick={handleClick}>About Me</li>
              <li onClick={handleClickFired}>Project</li>
              <li onClick={handleClicks}>Skills</li>
              <li onClick={handleClicksFired}>Contact</li>
            </ul>
          </div>
        </div>
        <span
          onClick={handleDisplay}
          className={`${"change__hover__style"} ${
            !styles ? "reposition__hover__style" : ""
          } `}
        >
          <GiHamburgerMenu />
        </span>
      </div>
    </div>
  );
};

export default Navs;
