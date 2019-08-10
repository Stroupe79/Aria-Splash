import React, {Component} from 'react';
import WeddingCard from './Wedding-card'
import PoolCard from './Pool-card'


class Combined extends Component {
    componentDidMount(){
        document.body.style.background = "#f2b5c1";
       }
    
render () {

    return (
    <div className='rowC'>
    <WeddingCard />
    <PoolCard />
    </div>
    )
    };
}

export default Combined
