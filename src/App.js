import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { CSSTransitionGroup, Transition } from 'react-transition-group'
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
import Combined from './components/Main_Body/Combined'
import Wedding from './components/Main_Body/Wedding';
import Pool from './components/Main_Body/Pool';
import Popup from './components/Popup/Popup'
import Helmet from 'react-helmet';
import Contact from './components/Collapse/Collapse'
import './react-transitions.css'
import WeddingCard from './components/Main_Body/Wedding-card'
import PoolCard from './components/Main_Body/Pool-card'
// import Button from './components/Button/Button'
import Table from './components/Main_Body/Table'
import Social from './components/Social/Social'



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
    const style ={
      backgroundColor: 'black'
    }
    return (
     
        <div className="transition-container">
      <div  className={style}>
      <Router>

      {/* <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    </CSSTransitionGroup> */}
      <Header />
      <Navbar />
      
      <Route path="/about" exact component={Locale} />
      <Route path="/book" exact component={Calendar} />
      <Route path="/contact" exact component={Forms} />
      <Route path="/rates" exact component={Table} />
      
      <Route path="/" exact component={Combined}/>
      {/* <Social/> */}
      {/* <Route path="/" exact component={()=>(<div><WeddingCard/><PoolCard/></div>)}/> */}


      </Router>
      </div>
    </div>
    )
  }
  
  
  
}

export default App;
