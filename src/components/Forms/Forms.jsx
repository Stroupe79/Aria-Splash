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
        
        
                    componentDidMount(){
                        document.body.style.background = "#f3b6c2";
                       }
                
        
        render() {
            return (
            <div className="react-transition fade-in m-5" style={{animationDuration: '1s'}}>

            <div style={{margin: 'auto', padding:50, width:1250, backgroundColor: '#fef2f2'}}>
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
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" onChange={this.handleInputChange} onClick={this.handleFormSubmit}  value="Contact us!" className="btn btn-success"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
 
