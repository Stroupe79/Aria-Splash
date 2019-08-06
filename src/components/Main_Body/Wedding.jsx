import React from "react";
import "./style.css";
import Wedding2 from "../../util/images/pool4.jpg"
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'


function Wedding () {
    return (
        <div className="mt-5 mb-5">
        <p><img className="wedding" src="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
        alt="Wedding Venue"
        />
        Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever!</p>
        
        <table>
  <tr>
    <th>Rates</th>
    <th>Hours</th> 
  </tr>
  <hr></hr>
  <tr>
    <td>$1500</td>
    <td>Full Day</td> 
  </tr>
  <tr>
    <td>$750</td>
    <td>Half Day</td> 
  </tr>
</table>
</div>
    );
}


export default Wedding