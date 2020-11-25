import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div id="footer" className="footer font-small pt-4 mt-4">
      <ul className="linklist">
        <li className="list-unstyled">
          <a href="https://github.com/kreidanderson">Github</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Resume</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.linkedin.com/in/katie-reid-anderson-3ba400a8/">
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="fluid">
        &copy; {new Date().getFullYear()} Copyright: Katie Reid-Anderson
      </div>
    </div>
  );
}

export default Footer;
