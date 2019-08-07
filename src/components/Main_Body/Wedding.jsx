import React from "react";
import "./style.css";
import Wedding2 from "../../util/images/pool4.jpg"
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'
import {Card, Table} from 'reactstrap'


function Wedding () {
    return (
        <Card>
      <div className="mt-5 mb-5">
        <img className="wedding" src="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
        alt="Wedding Venue"
        />
        <p>Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever!</p>
        
        <Table>
        <thead>
  <tr>
    <th>Rates</th>
    <th>Hours</th> 
  </tr>
  </thead>
  <tr>
    <td>$1500</td>
    <td>Full Day</td> 
  </tr>
  <tr>
    <td>$750</td>
    <td>Half Day</td> 
  </tr>
</Table>
</div>
</Card>
    );
}


export default Wedding