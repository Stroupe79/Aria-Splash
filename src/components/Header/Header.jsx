    
    import React from 'react';
    import { Component } from 'react';
    import { Jumbotron, Button } from 'reactstrap';
    import "./style.css";
    import Background from '../../util/images/back4.jpeg'



class Header extends Component {
  render () {
    const styles = {
      backgroundImage: 'url(' + Background + ')',
      margin: "0rem"
    }


  
  return (
    <div>
      <Jumbotron style={styles}>
        <h1 className="display-3">Venues of Houston</h1>
        <p className="lead">Three venues located conveniently in one location!</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};
}

export default Header;