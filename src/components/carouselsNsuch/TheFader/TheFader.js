import React, {Component} from 'react';

import './thefader.css'


class TheFader extends Component {


render() {
return(

<div className="carouselBackground">

    <img
      className="carouselImages firstCarouselImage"
      src={require("../images/simple1.jpg")}
    />

    <img
      className="carouselImages secondCarouselImage"
      src={require("../images/simple2.jpg")}
    />

    <img
      className="carouselImages thirdCarouselImage"
      src={require("../images/simple3.jpg")}
    />
    <img className ="carouselImages fourthCarouselImage"
      src={require("../images/simple4.jpg")}/>
   

</div>
)}
}
export default TheFader