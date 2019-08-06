import { Form, TextField, SubmitField } from 'react-components-form';

import React, { Component } from 'react';

export default class Forms extends Component {
    render() {
        return (
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
                        <input type="submit" value="Register Business" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        )
    }
}
 
