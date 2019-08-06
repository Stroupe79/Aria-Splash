import React from "react";
import "./style.css";
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'


function Pool () {
    return (
        <div className="mt-5 mb-5">
        <p><img className="pool" src="https://cdn.architecturendesign.net/wp-content/uploads/2014/09/2-e1410047123343.png"
        alt="Wedding Venue"
        />
        Rent the ultimate pool area for your outdoor party! Reunions, receptions, or just have a blowout party! This is one of the most unique pools and venues in south Texas.
        Come see for yourself!</p>
        
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


export default Pool