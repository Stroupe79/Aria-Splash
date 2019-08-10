import React, { Component, Fragment } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Card } from "reactstrap"
import "./style.css";


class Locale extends Component {

    

    render () {
        const style = {
            width: "50%",
            height: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            }
        const pos = {
            lat: 29.783090,
            lng: -95.134470
            }
        

    return (
        <div className="react-transition swipe-up" style={{ animationDuration: '1s'}}>
        <div>
        <h2 style={{ backgroundColor: '#fef2f2', height:300}} className="m-5 border" >Located in Channelview, it's conveniently located at the corner of Beltway 8 and I-10 making it accessible from any direction in the city.</h2>
        </div>
        <Map
        google={this.props.google} 
        zoom={12}
        initialCenter={{
            lat: 29.783090,
            lng: -95.134470,
        }}
        style={style}
        >
        <Marker position={pos} />
        </Map>
        
        </div>
        );
        };
    }
    
        export default GoogleApiWrapper({
            apiKey: ('AIzaSyCz9Oqs4sXoDiZY7AwH9uUsHYdOru4Kr9w'),
            version: 3.31
           })(Locale);




        
      