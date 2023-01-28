import React from "react";
import GitHub from "../../assets/images/github-mark.png";
import LinkedIn from "../../assets/images/iconmonstr-linkedin-3.svg";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/richielollis"
        target="_blank"
        className="footerImg"
      >
        <img src={GitHub}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/richie-lollis-042bb0235/"
        target="_blank"
        className="footerImg"
      >
        <img src={LinkedIn}></img>
      </a>
    </footer>
  );
}

export default Footer;
