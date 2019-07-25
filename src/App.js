import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Main_Body/Body'
// import Button from './components/Button/Button'
import { Button } from 'reactstrap';




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
      <Button color="danger">Danger!</Button>
      <Body />
      </div>

      {/* <Route path="/" exact component={Body} />
      <Route path="/contact" exact component={Forms} />
      <Route path="/contact" exact component={Forms} /> */}
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
