import React, { Component } from "react"

import { slideInRight, slideOutLeft } from "react-animations"
import Radium, { StyleRoot } from "radium"

import SlideInImages from "./SlideInImages"

class SlideIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.a === this.props.imgArray.length - 1) {
        this.setState({ a: 0 })
      } else {
        this.setState({ a: this.state.a + 1 })
      }
    }, 3000)
  }

  render() {
    console.log(this.state)
    const { styles, imgArray, imgStyles } = this.props
    const otherStyles = {
      slideInRight: {
        animation: "x 3s",
        animationName: Radium.keyframes(slideInRight, "slideInRight"),
        ...this.props.imgStyles
      },
      slideOutLeft: {
        animation: "x 3s",
        animationName: Radium.keyframes(slideOutLeft, "slideOutLeft"),
        ...this.props.imgStyles
      }
    }
    const { a } = this.state
    return (
      <div style={{ ...styles, display: "inline" }}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <StyleRoot>
            {this.props.imgArray.map(
              (item, i) =>
                a === i ? (
                  <img
                    src={this.props.imgArray[i]}
                    style={otherStyles.slideInRight}
                  />
                ) : null
            )}
            {this.props.imgArray.map(
              (item, i) =>
                a === i ? (
                  <img
                    src={this.props.imgArray[a === 0 ? imgArray.length-1 : a-1]}
                    style={otherStyles.slideOutLeft}
                  />
                ) : null
            )}
          </StyleRoot>
        </div>
      </div>
    )
  }
}
export default SlideIn
//
