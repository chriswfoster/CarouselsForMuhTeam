import React, { Component } from "react"

import { slideInRight, slideOutLeft } from 'react-animations'

import SlideInImages from "./SlideInImages"

class SlideIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previousImage: this.props.imgArray[0],
      nextImage: "first"
    }
  }

  imageLooper(arr) {
    let i = 0
    setInterval(() => {
      if (i === arr.length - 1) {
        i = 0
        this.setState({ nextImage: arr[0], previousImage: arr[i] })
      } else {
        i++
        this.setState({ nextImage: arr[i + 1], previousImage: arr[i] })
      }
    }, 1000)
  }

  render() {
    console.log(this.props)
    const { styles, imgArray, imgStyles } = this.props
    this.imageLooper(imgArray)
    return (
      <div style={{ ...styles, display: "inline" }}>
        <img src={this.state.previousImage} style={{ ...imgStyles }} />

        {this.state.nextImage === "first" ? null : (
          <img src={this.state.nextImage} style={{ ...imgStyles }} />
        )}
      </div>
    )
  }
}
export default SlideIn
//
