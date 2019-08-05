import React from "react";
import "./style.css";
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'


function Pool () {
    return (
        <ResizeImage
        src={Pool1}
        options={{width: 50}}
        alt="Pool Venue"
        />
        // <div><img src={Wedding2}/></div>
    );
}


export default Pool