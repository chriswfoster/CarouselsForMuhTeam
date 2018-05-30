import React, {Component} from 'react'

import SlideInImages from './SlideInImages'

class SlideIn extends Component{
    constructor(){
        super()
        this.state= {
            previousImage: "",
            nextImage: ""
        }
    }

    imageLooper(){
        
    }



render(){
    console.log(this.props)
    const {styles, imgArray, imgStyles} = this.props
return(
<div style={{...styles, display: "inline"}}>
{imgArray.map(item => <img src={item} style={{...imgStyles}}/>)}
</div>
)
}
}
export default SlideIn
// 