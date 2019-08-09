import React from "react";
import "./style.css";
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'
import {Card, Table} from 'reactstrap'
import Contact from '../Collapse/Collapse'



function Pool () {
    return (
        <div className="react-transition swipe-left m-5" style={{backgroundColor: "black", animationDuration: '1s'}}>
        <Card>
        <div className="mt-5 mb-5">
        <img className="pool" src="https://cdn.architecturendesign.net/wp-content/uploads/2014/09/2-e1410047123343.png"
        alt="Wedding Venue"
        />
        <p>Rent the ultimate pool area for your outdoor party! Reunions, receptions, or just have a blowout party! This is one of the most unique pools and venues in south Texas.
        Come see for yourself!</p>
        
        <Table bordered>
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
<Contact/>
</div>
    );
}


export default Pool