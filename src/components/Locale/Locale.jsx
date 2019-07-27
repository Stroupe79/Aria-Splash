import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./style.css";

class Locale extends Component {

    render () {
        const style = {
            width: "500px",
            height: "500px"
            }
        const pos = {
            lat: 29.783090,
        lng: -95.134470
        }

    return (
        <div id="map">
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
        </div>
        );
        };
    }

        export default GoogleApiWrapper({
            apiKey: ('AIzaSyCz9Oqs4sXoDiZY7AwH9uUsHYdOru4Kr9w'),
            version: 3.31
           })(Locale);




        
      