import Netflix from "../images/netflix.png";
import Amazon from "../images/amazon-dark-logo-png.png";
import Todo from "../images/todo.jpg";
import Date from "../images/date.jpeg";
import Weather from "../images/weather-app.jpg";
import Calculator from "../images/calculator.png";
import ponder from "../images/pondering.jpeg";
import pointDown from "../images/pointing down.jpg";
import sky from "../images/sky.jpg";
import "./Project.css";
import { useState } from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const Project = () => {
  const [skyImg, setSkyImg] = useState(sky);
  return (
    <div className="project">
      <div
        className="project__head"
        style={{
          backgroundImage: `url(${skyImg})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Zoom right>
          <h1>
            Seeing is believ<span>ing right?</span>
            <span>
              <img src={ponder} alt="" className="project__images__think" />
            </span>
          </h1>
          <h2>
            Check out my Past Works{" "}
            <span>
              <img src={pointDown} alt="" className="project__images__point" />
            </span>
          </h2>
        </Zoom>
      </div>
      <div className="project__images">
        <Bounce left>
          <div className="box">
            <a href="https://netflix-clone-2eb85.web.app/" target="_blank">
              <img src={Netflix} alt="" />
              <p>A Netflix clone with React</p>
            </a>
          </div>
        </Bounce>

        <Bounce right>
          <div className="box">
            <a href="https://clone-4af22.web.app/" target="_blank">
              <img src={Amazon} alt="" />
              <p>A clone of Amazon E-commerce site</p>
            </a>
          </div>
        </Bounce>

        <Bounce left>
          <div className="box">
            <a href="https://stephenbernard98.github.io/Calculator/" target="_blank">
              <img src={Calculator} alt="" />
              <p>Aesthetic looking Calculator with Vanilla Javascript</p>
            </a>
          </div>
        </Bounce>

        <Bounce right>
          <div className="box">
            <a href="https://stephenbernard98.github.io/Real-Time-and-Date/" target="_blank">
              <img src={Date} alt="" />
              <p>Real-time Date and Time</p>
            </a>
          </div>
        </Bounce>

        <Bounce left>
          <div className="box">
            <a href="https://weather-app-a4a6b.web.app/" target="_blank">
              <img src={Weather} alt="" />
              <p>A real-time International Weather App</p>
            </a>
          </div>
        </Bounce>

        <Bounce right>
          <div className="box">
            <a href="https://todo-app-dc68e.web.app/" target="_blank">
              <img src={Todo} alt="" />
              <p>A Todo App</p>
            </a>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Project;
