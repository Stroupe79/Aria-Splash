import { Form, TextField, SubmitField } from 'react-components-form';
import API from "../../util/API";
import React, { Component } from 'react';
import { width } from '@material-ui/system';
import './wrapper.css'
import PoolCard from './Pool-card'
import WeddingCard from './Wedding-card'




export default class Wrapper extends Component {
    // componentDidMount(){
    //     document.body.style.background = "#f2b5c1";
    //    }

    render() {
        return (

           <div className="wrapper react-transition fade-in" style={{animationDuration: '2s'}}>
           <div className='rowC'>
    <WeddingCard />
    <PoolCard />
    </div>

            </div>
        )
    }
}
 
// const Wrapper = ({children}) =>

//     (

//            <div className="wrapper react-transition fade-in" style={{animationDuration: '2s'}}>
//            <div className='rowC'>
//     <div>{children}</div>
//     </div>

//             </div>
//         )
   
//         export default Wrapper
