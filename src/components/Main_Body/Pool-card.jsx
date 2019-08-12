import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";




function PoolCard() {


  return (
    <Card raised='true' className="card react-transition swipe-right" style={{animationDuration: '1s', animationDelay: '1s'}}>
      <CardActionArea>
        <CardMedia
          className="media"
          image="https://cdn.architecturendesign.net/wp-content/uploads/2014/09/2-e1410047123343.png"
          title="Pool"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            The Pool
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Rent the ultimate pool area for your outdoor party! This is one of the most unique pools and venues in south Texas.
        Come see for yourself!
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

export default PoolCard