import react from "../images/reactImg.png";
import Js from "../images/js_logo.png";
import css from '../images/css-img.png'
import "./Language.css";
import Zoom from "react-reveal/Zoom";

const Language = () => {
  return (
    <div className="languages">
      <Zoom bottom left>
        <div className="react langs">
          <img src={react} alt="React-Image" />
          <p>React</p>
        </div>
      </Zoom>
      <Zoom top>
        <div className="js langs">
          <img src={Js} alt="Javascript-Image" className="js" />
          <p>Javascript</p>
        </div>
      </Zoom>
      <Zoom bottom right>
        <div className="css langs">
          <img src={css} alt="Css" />
          <p>CSS</p>
        </div>
      </Zoom>
      
    </div>
    
  );
};

export default Language;
