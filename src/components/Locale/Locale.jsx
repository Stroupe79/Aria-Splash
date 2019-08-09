import React, { Component, Fragment } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./style.css";


class Locale extends Component {

    

    render () {
        const style = {
            width: "50%",
            height: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
            }
        const pos = {
            lat: 29.783090,
            lng: -95.134470
            }
        

    return (
        // <div className="react-transition swipe-right" style={{backgroundColor: "pink", animationDuration: '1s'}}>

        <Map 
        google={this.props.google} 
        zoom={12}
        initialCenter={{
            lat: 29.783090,
            lng: -95.134470
        }}
        style={style}
        >
        <h2>Located in Channelview, it's conveniently located at the corner of Beltway 8 and I-10 making it accessible from any direction in the city.</h2>
        <Marker position={pos} />
        </Map>
        // </div>
        );
        };
    }
    
        export default GoogleApiWrapper({
            apiKey: ('AIzaSyCz9Oqs4sXoDiZY7AwH9uUsHYdOru4Kr9w'),
            version: 3.31
           })(Locale);




        
      