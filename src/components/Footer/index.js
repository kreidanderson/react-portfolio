import React from "react";
import "./style.css";


function Footer(props) {
    return (
        <div id="footer" className="footer font-small pt-4 mt-4">

                                <ul>
                                    <li className="list-unstyled">
                                        <a href="#!">Github</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Resume</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">LinkedIn</a>
                                    </li>
                                </ul>

                        <div className="fluid">
                            &copy; {new Date().getFullYear()} Copyright: Katie Reid-Anderson 
                        </div>
        </div>

    );
}

export default Footer;