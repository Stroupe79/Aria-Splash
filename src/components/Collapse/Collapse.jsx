import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Forms from '../Forms/Forms'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} className='bottomright'>Contact Us!
        <Collapse isOpen={this.state.collapse}>
            <Forms/>
        </Collapse>
            </Button>
      </div>
    );
  }
}

export default Contact;