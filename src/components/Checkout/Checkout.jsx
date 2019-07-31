import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

var amount = 100

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  

  render() {
    return (
      <StripeCheckout
      amount={{amount}}
      billingAddress
      description="Thank you!"
      image="https://i.ibb.co/fH3wJ1S/logo.png"
      locale="auto"
      name="The Aria Splash"
      stripeKey="pk_test_0eRZoTrgKYO9XlSmOYZMh3OG00JM5eHE4j"
      token={this.onToken}
      zipCode
      label="Pay with 💳"
      />
    )
  }
}