import React from "react";
import "./style.css";
import Card from "../Card"
import Wrapper from "../Wrapper/index"

function PortfolioCard(props) {
    return (
        <Wrapper>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Cost:</strong> {props.cost}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
    </Wrapper>

    )
    };

export default PortfolioCard;