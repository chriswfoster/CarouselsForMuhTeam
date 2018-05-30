import React, { Component } from "react"

import SlideIn from "./carouselsNsuch/animationTypes/SlideIn/SlideIn"

import simple1 from "./carouselsNsuch/images/simple1.jpg"
import simple2 from "./carouselsNsuch/images/simple2.jpg"
import simple3 from "./carouselsNsuch/images/simple3.jpg"
import simple4 from "./carouselsNsuch/images/simple4.jpg"
import simple5 from "./carouselsNsuch/images/simple5.jpg"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      images: [simple1, simple2, simple3, simple4, simple5]
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

    return (
      <div>
        <SlideIn imgArray={this.state.images} styles={styles} imgStyles={imgStyles} />

    
      </div>
    )
  }
}
export default Home
