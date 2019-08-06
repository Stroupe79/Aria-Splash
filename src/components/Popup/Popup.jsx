import React, { Component, Fragment } from "react";
import "./style.css";
import Button from '../Button/Button'


class Popup extends Component {

render () {

return (
<div className='popup bottomright'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<Button onClick={this.props.closePopup}>Thank you!</Button>  
</div>  
</div>  
);
}
};

export default Popup