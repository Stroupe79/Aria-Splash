import React, {Component} from 'react';
import WeddingCard from './Wedding-card'
import PoolCard from './Pool-card'

class Combined extends Component {

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
