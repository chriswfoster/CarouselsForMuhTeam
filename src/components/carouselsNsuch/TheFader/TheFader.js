import React, {Component} from 'react';

import './thefader.css'


class TheFader extends Component {


render() {
return(
<div>
<div className="carouselBackground">


    <img
      className="carouselImages firstCarouselImage"
      src={require("./carouselimages/security 2.png")}
    />

    <img
      className="carouselImages secondCarouselImage"
      src={require("./carouselimages/automation 5.png")}
    />

    <img
      className="carouselImages thirdCarouselImage"
      src={require("./carouselimages/CustomSolutions.png")}
    />
    <img className ="carouselImages fourthCarouselImage"
      src={require("./carouselimages/247support.png")}/>
   

</div></div>
)}
}
export default TheFader