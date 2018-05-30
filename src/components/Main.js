import React, { Component } from "react"

import SlideIn from './carouselsNsuch/animationTypes/SlideIn'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "./carouselsNsuch/images/simple1.jpg",
        "./carouselsNsuch/images/simple2.jpg",
        "./carouselsNsuch/images/simple3.jpg",
        "./carouselsNsuch/images/simple4.jpg",
        "./carouselsNsuch/images/simple5.jpg"
      ]
    }
  }

  render() {

    const styles = {
      backgroundColor: "blue",
      width: "50vw",
      height: "50vh"
    }
    
    const imgStyles = {
      width: "50%",
      height: "50%"
    }

    return <div>
      <SlideIn imgArray={this.state.images} styles={styles} imgStyles={imgStyles}/>
      }
      </div>
  }
}
export default Home
