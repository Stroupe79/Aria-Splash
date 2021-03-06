import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'



 class Table extends React.Component {
     render() {
       return (
         <div  className="react-transition fade-in" style={{animationDuration: '1s'}}>
         <div className="rates">
        <div className="columns">
        <ul className="price">
          <li className="header">The Barn</li>
          <li className="grey">Full Day</li>
          <li>$1500</li>
          <li>8am - 8pm</li>
          <li>72 Hour Cancellation Policy</li>
          <li className="grey"><a href="/book" className="button">Book</a></li>
        </ul>
      </div>
              <div className="columns">
              <ul className="price">
                <li className="header">The Barn</li>
                <li className="grey">Half Day</li>
                <li>$750</li>
                <li>8am - 2pm or 2pm - 8pm</li>
                <li>72 Hour Cancellation Policy</li>
                <li className="grey"><a href="/book" className="button">Book</a></li>
              </ul>
            </div>
            <div className="columns">
              <ul className="price">
                <li className="header">The Pool</li>
                <li className="grey">Full Day</li>
                <li>$1500</li>
                <li>8am - 2pm or 2pm - 8pm</li>
                <li>72 Hour Cancellation Policy</li>
                <li className="grey"><a href="/book" className="button">Book</a></li>
              </ul>
            </div>
            <div className="columns">
              <ul className="price">
                <li className="header">The Pool</li>
                <li className="grey">Half Day</li>
                <li>$750</li>
                <li>8am - 2pm or 2pm - 8pm</li>
                <li>72 Hour Cancellation Policy</li>
                <li className="grey"><a href="/book" className="button">Book</a></li>
              </ul>
            </div>
            </div>
            </div>
       )
     }
    };

    export default Table
