import React, {Component} from 'react'

class SlideIn extends Component{

render(){
    const {styles} = this.props
return(
<div style={{...styles}}>
{this.props.imgArray.map(item => item)}
</div>
)
}
}
export default SlideIn