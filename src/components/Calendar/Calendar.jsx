import React from 'react';
import Iframe from 'react-iframe'
import "./style.css";
import Spinner from 'react-spinkit'


// const Calendar = (props) => {
// return (
// <Iframe frameBorder="0" url='https://houstonvenues.youcanbook.me/?noframe=true&skipHeaderFooter=true'
// id="ycbmiframehoustonvenues"
// width="1000px"
// height="1500px"
// background-color="transparent"
// allowtransparency="true"
// loading="Loading....."
// />
// );
// };

// export default Calendar;

class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
  hideSpinner = () => {
      this.setState({
        loading: false
      });
    };
  render() {
      return (
        <div className="container rsvp-wrapper" >
          {this.state.loading ? (
            <Spinner
              className="loading text-center"
              name="three-bounce"
              color="white"
              fadeIn="none"
            />
          ) : null}
           <Iframe frameBorder="0" url='https://houstonvenues.youcanbook.me/?noframe=true&skipHeaderFooter=true'
            id="ycbmiframehoustonvenues"
            width="1000px"
            height="1500px"
            background-color="transparent"
            allowtransparency="true"
            loading="Loading....."
            />

        </div>
      );
    }
  }

export default Calendar;

