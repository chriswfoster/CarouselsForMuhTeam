import React, {Component} from 'react'

import SlideInImages from './SlideInImages'

class SlideIn extends Component{

render(){
    console.log(this.props)
    const {styles, imgArray, imgStyles} = this.props
return(
<div style={{...styles, display: "inline"}}>
{imgArray.map(item => <SlideInImages image={item} styles={imgStyles}/>)}
</div>
)
}
}
export default SlideIn
// 