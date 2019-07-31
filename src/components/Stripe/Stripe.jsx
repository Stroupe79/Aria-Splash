import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import Checkout from '../Checkout/Checkout'


class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_0eRZoTrgKYO9XlSmOYZMh3OG00JM5eHE4j">
        <div className="example">
          <h1>Aria Splash - Thank you for your business!</h1>
          <Elements>
            <Checkout />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;