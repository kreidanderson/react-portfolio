import React, {Component} from "react";
import "./style.css";
import PortfolioCard from "../../Card/index"
import portfolio from "./portfolio.json"
import Wrapper from "../../Wrapper/index"


class Portfolio extends Component {

  state = {
    portfolio
  };

  render() {
return (
  <Wrapper>
    
      {portfolio.map(hobby=> (
        <PortfolioCard
          id={hobby.id}
          key={hobby.id}
          name={hobby.name}
          image={hobby.image}
          link={hobby.link}
          description={hobby.description}
        />
      ))}
   
    </Wrapper>
) }
      }
    


export default Portfolio;