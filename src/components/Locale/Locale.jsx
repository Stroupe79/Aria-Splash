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
        <Map 
        google={this.props.google} 
        zoom={12}
        initialCenter={{
            lat: 29.783090,
            lng: -95.134470
        }}
        style={style}
        >
        <Marker position={pos} />
        </Map>
        );
        };
    }

        export default GoogleApiWrapper({
            apiKey: ('AIzaSyCz9Oqs4sXoDiZY7AwH9uUsHYdOru4Kr9w'),
            version: 3.31
           })(Locale);




        
      