import React, { Component } from "react"

class SlideInImages extends Component {
  render() {
    console.log(this.props.image)
    const { image, styles, imgStyles } = this.props


    return <img src={image} style={{...styles, }}/>

    
  }
}
export default SlideInImages
