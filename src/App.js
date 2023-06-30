import "./App.css";
import About from "./Body/About";
import Competence from "./Body/Competence";
import Header from "./Header/Header";
import Language from "./Body/Language";
import Project from "./Body/Project";
import Skills from "./Body/Skills";
import Message from "./Body/Message";
import Navs from "./Header/Navs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Language />
      <Competence />
      <Project />
      <Skills />
      <Message />
      {/* <Navs /> */}
    </div>
  );
}

export default App;
