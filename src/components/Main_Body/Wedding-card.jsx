


import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";




function WeddingCard() {


  return (
    <Card raised='true' className="card react-transition swipe-left" style={{animationDuration: '2s'}}>
      <CardActionArea>
        <CardMedia
          className="media"
          image="https://cdn0.weddingwire.com/img_g/ww/t30_fairview-farm.jpg"
          title="Wedding Barn"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            The Barn
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Rent the barn for your wedding! Beautiful rustic location that will give you an experince you'll never forget and cherish forever!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
        <div className="rates">
      <Button color="primary"><a href="/rates" className="button mainBtn">
          Rates</a>
        </Button>
        <Button   color="primary"><a href="/book" className="button mainBtn">
          Book Now!</a>
        </Button>
        </div>
    </Card>
    // </div>
  );
}

export default WeddingCard