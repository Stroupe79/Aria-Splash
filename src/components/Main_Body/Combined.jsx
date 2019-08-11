import React, {Component} from 'react';
import WeddingCard from './Wedding-card'
import PoolCard from './Pool-card'
import Wrapper from './Wrapper'

const style = {
    height: '80%',
    opacity: .5
}
class Combined extends Component {
    componentDidMount(){
        document.body.style.background = "#f3b6c2";
       }
    
render () {

    return (
        <div>
        <Wrapper>
    </Wrapper>
    </div>
    )
    };
}

export default Combined
