import React from "react";
import "./style.css";
import Wedding2 from "../../util/images/wedding2.jpg"
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'


function Wedding () {
    return (
        <ResizeImage
        src={Wedding2}
        alt="Wedding Venue"
        options={{width: '25%'}}
        />
    );
}


export default Wedding