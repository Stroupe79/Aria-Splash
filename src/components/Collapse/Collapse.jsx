import React, { Fragment, Component } from 'react';
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';
import Forms from '../Forms/Forms'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    this.open = false
  }

  toggle() {
    this.setState(state => ({ collapse : !state.collapse }));
  }

  toggle2() {
    this.setState(state => ({ collapse: state.collapse}))
  }

  render() {
    return (
      <div>
        <Button color="primary" id="toggler"  style={{ marginBottom: '1rem' }} className='bottomright'>Contact Us!
        <UncontrolledCollapse toggler="#toggler" >
            <Forms/>
        </UncontrolledCollapse>
            </Button>
      </div>
    );
  }
}

export default Contact;