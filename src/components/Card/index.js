import React from "react";
import "./style.css";
import Card from "."
import Wrapper from "../Wrapper/index"

function PortfolioCard(props) {
    return (
       
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong><a href={props.link}>{props.name}</a></strong> 
          </li>
          <li>
            <strong></strong>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>


    )
    };

export default PortfolioCard;