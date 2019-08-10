import React, {Component} from 'react';
import WeddingCard from './Wedding-card'
import PoolCard from './Pool-card'

class Combined extends Component {

render () {

    return (
    <div>
    <WeddingCard />
    <PoolCard />
    </div>
    )
    };
}

export default Combined
