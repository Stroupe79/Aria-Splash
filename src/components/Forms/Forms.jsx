import { Form, TextField, SubmitField } from 'react-components-form';
import API from "../../util/API";
import React, { Component } from 'react';




export default class Forms extends Component {
    
state = {
    contact: ""
};
    
    handleFormSubmit = event => {
        console.log(this.state.name)
        event.preventDefault(this.state.name);
          API.saveLead(this.state.name)
            .catch(err => console.log(err));
        };

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
              name: value
            });
            // console.log(this.state.name)
          };
    

    render() {
        return (
            <div className="react-transition fade-in m-5">

            <div style={{marginTop: 10}}>
                <h3>Questions?</h3>
                <form>
                    <div className="form-group">
                        <label>Name  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email Address </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>How can we help? </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" onChange={this.handleInputChange}  value="Contact us!" className="btn btn-success"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
 
