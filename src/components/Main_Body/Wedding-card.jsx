// import React from "react";
// import "./style.css";
// import Wedding2 from "../../util/images/pool4.jpg"
// import Pool1 from "../../util/images/pool1.jpeg"
// import ResizeImage from 'react-resize-image'
// import {Card, Table} from 'reactstrap'
// import Card from '@material-ui/core/Card';

// const Wedding = ({show}) => {
//     return (
//         <div className="react-transition swipe-right m-5" style={{animationDuration: '1s', backgroundColor: '#bef1e9'}}>
//         <Card>
//             <div className="m-5">

      
//         <p>Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever! </p>
//         <img className="wedding m-5" src="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
//         alt="Wedding Venue"
//         />

//         <Table bordered>
//         <thead>
//   <tr>
//     <th>Rates</th>
//     <th>Hours</th> 
//   </tr>
//   </thead>
//   <tr>
//     <td>$1500</td>
//     <td>Full Day</td> 
//   </tr>
//   <tr>
//     <td>$750</td>
//     <td>Half Day</td> 
//   </tr>
// </Table>

// </div>
// </Card>
// </div>
//     );
// }



// export default Wedding



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";
import Table from './Table'




function WeddingCard() {


  return (
    // <div className="react-transition swipe-left m-5" style={{animationDuration: '1s'}}>
    <Card raised='true' className="card react-transition swipe-left" style={{animationDuration: '1s'}}>
      <CardActionArea>
        <CardMedia
          className="media"
          image="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Barn
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Table />
      </CardActions>
    </Card>
    // </div>
  );
}

export default WeddingCard