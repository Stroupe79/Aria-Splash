import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Button } from 'reactstrap';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import Stripe from './components/Stripe/Stripe'
// import Slides from './components/Carousel/Carousel'
import './App.css';
import Forms from './components/Forms/Forms'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Main_Body/Wedding'
import Locale from './components/Locale/Locale.jsx'
import Rates from './components/Rates/Rates'
import Calendar from './components/Calendar/Calendar';
import Wedding from './components/Main_Body/Wedding';
import Pool from './components/Main_Body/Pool';
import Popup from './components/Popup/Popup'
import Helmet from 'react-helmet';
import Contact from './components/Collapse/Collapse'
// import Button from './components/Button/Button'




class App extends Component {
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
    }  
    
      togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  


  render() {
    return (
      <Router>
      <div>
        {/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}> */}
      <Header />
      <Navbar />
      <Contact/>
      {/* <Button outline color="success" color="danger"  size="lg">Danger!</Button> */}
      <Route path="/about" exact component={Locale} />
      <Route path="/rates" exact component={Rates} />
      <Route path="/book" exact component={Calendar} />
      <Route path="/contact" exact component={Forms} />
      <Route path="/" exact component={()=>(<div><Wedding/><Pool/></div>)} />


{/* Popup section */}
      {/* <div>  
      <h1> Questions? </h1>  
      <Button onClick={this.togglePopup.bind(this)} text={"Contact us!"}></Button>  

          {this.state.showPopup ?  
        <Popup  
          text="We'd love to hear from you!"  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }   
        </div>  
 */}

      {/* <Calendar/> */}
      {/* <Route path="/contact" component={{stripe: StripeProvider, checkout:CheckoutForm }}/> */}
      {/* </Helmet> */}
      </div>

      </Router>
    )
  }



}

export default App;
