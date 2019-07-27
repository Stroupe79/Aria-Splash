import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Button } from 'reactstrap';
import './App.css';
import Forms from './components/Forms/Forms'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Main_Body/Body'
import Locale from './components/Locale/Locale.jsx'
import Rates from './components/Rates/Rates'
// import Button from './components/Button/Button'




class App extends Component {
  state = {
    // bookings shows upcoming availability on main page
    bookings:""
  }


  render() {
    return (
      <Router>
      <div>
      <Header />
      <Navbar />
      <Button outline color="success" color="danger"  size="lg" >Danger!</Button>
      <Route path="/about" exact component={Locale} />
      <Route path="/rates" exact component={Rates} />
      <Body />
      </div>

      <Route path="/" exact component={Body} />
      <Route path="/contact" exact component={Forms} />
      </Router>
    )
  }



}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
