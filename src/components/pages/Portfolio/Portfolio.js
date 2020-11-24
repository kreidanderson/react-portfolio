import React, {Component} from "react";
import "./style.css";
import PortfolioCard from "../../Card/index"
import portfolio from "./portfolio.json"


class Portfolio extends Component {

  state = {
    portfolio
  };

  render() {
return (
    <div>
      {portfolio.map(hobby=> (
        <PortfolioCard
          id={hobby.id}
          key={hobby.id}
          name={hobby.name}
          image={hobby.image}
          cost={hobby.cost}
          description={hobby.description}
        />
      ))}
    </div>

) }
      }
    


export default Portfolio;