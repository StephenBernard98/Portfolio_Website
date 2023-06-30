import "./Message.css";
import { useRef, useState, useEffect } from "react";
import email from "../images/email-img.png";
import phone from "../images/iphone-image.jpg";
import { useInView } from "react-intersection-observer";

const Message = () => {
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");
  const [messages, setMessages] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const { ref: myRef, inView: visibleDiv } = useInView({ threshold: 0.2 });
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const [show, handleShow] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [changeSIze, setChangeSize] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const handleClick = () => {
    if (names === "") {
      setNameValue("Name Required");
    } else {
      setNameValue("");
    }
    if (emails === "") {
      setEmailValue("Email Required");
    } else {
      setEmailValue("");
    }
    if (messages === "") {
      setTextValue("Message box cannot be empty");
    } else {
      setTextValue("");
    }
    if (messages !== "" && emails !== "" && names !== "") {
      setTimeout(() => {
        const loading = "Loading...";
      document.querySelector(".submit__button").innerHTML = loading;
      setChangeSize(true);
      }, 3000)
      setNames("");
      setEmails("");
      setMessages("");
      setSubmitMessage(`Thank you for getting in touch ${names}!`);
      setConfirmMessage(true);
    }
  };



  const handleClickFired = () => {
    var element = document.querySelector(".myDiv");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="message__section" ref={myRef}>
      <div
        className={`${"message__container"} ${
          visibleDiv ? "shown" : "fade__out"
        }`}
      >
        <h1>I can bring your ideas to reality</h1>
        <div className="contacts">
          <div className="contacts__email">
            <img src={email} alt="email-image" />
            <a href="mailto:stephenbenard3@gmail.com">
              stephenbenard3@gmail.com
            </a>
          </div>
          <div className="contact__number">
            <img src={phone} alt="phone-image" />
            <a href="tel:+1 (123) 456-7890">09165188912</a>
          </div>
        </div>

        <div
          className={`${"inputs"} ${confirmMessage ? "remove__div" : "inputs"}`}
        >
          <input
            type="text"
            name="name"
            className="name"
            placeholder="&#9998; your name"
            required
            value={names}
            onChange={(e) => setNames(e.target.value)}
            ref={nameRef}
          />
          <p className="name__error">{nameValue}</p>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="&#9998; your email"
            required
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            ref={emailRef}
          />
          <p className="email__error">{emailValue}</p>
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            className="message"
            placeholder="&#9998; your message"
            required
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            ref={textRef}
          ></textarea>
          <p className="text__error">{textValue}</p>
          <input
            type="button"
            className={`${"submit__button"} ${
              changeSIze ? "change__button__size" : ""
            }`}
            value="Send Message"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="submit__message">
        <h2>{submitMessage}</h2>
      </div>
      <span
        className={`arrow__top ${show && "arrow__top__remove"}`}
        onClick={handleClickFired}
      >
        &#8593;
      </span>
    </div>
  );
};

export default Message;
