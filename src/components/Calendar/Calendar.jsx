import React from 'react';
import Iframe from 'react-iframe'
import "./style.css";



const Calendar = (props) => {
return (
<Iframe frameBorder="0" url='https://houstonvenues.youcanbook.me/?noframe=true&skipHeaderFooter=true'
id="ycbmiframehoustonvenues"
width="1000px"
height="1500px"
background-color="transparent"
allowtransparency="true"
/>
);
};

export default Calendar;