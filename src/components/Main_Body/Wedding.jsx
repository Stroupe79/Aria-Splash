import React from "react";
import "./style.css";
import Wedding2 from "../../util/images/pool4.jpg"
import Pool1 from "../../util/images/pool1.jpeg"
import ResizeImage from 'react-resize-image'
import {Card, Table} from 'reactstrap'

const Wedding = ({show}) => {
    return (
        <div className="react-transition swipe-right m-5" style={{animationDuration: '1s', backgroundColor: '#bef1e9'}}>
        <Card>
            <div className="m-5">

      
        <p>Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever! </p>
        <img className="wedding m-5" src="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
        alt="Wedding Venue"
        />

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
</div>
    );
}



export default Wedding