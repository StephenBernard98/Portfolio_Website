import pic1 from "../images/Stephen1.JPG";
import "./About.css";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import "animate.css/animate.min.css";

const About = () => {
 
  return (
    <div>
      <div className="about">
        <Rotate top left>
          <img src={pic1} alt="Stephen" />
        </Rotate>
      
          <Bounce right>
            <p>
              I am Stephen Bernard. A BA. graduate of English Language and Literature of Nnamdi Azikiwe University, Awka. 
              An avid web designer and developer with two years hands-on experince with different self-given projects. I am also a Movie Script-Writer, Dramtist, Poet, Novelist, Essayist, Creative Director and everything that has to do with literary and peforming art. An experinced writer with a lot of movie scripts and poetry under my belt
              </p>
          </Bounce>
      </div>
        
    </div>
  );
};

export default About;

