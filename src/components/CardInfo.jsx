import React, { Component } from 'react';

class CardInfo extends Component {
    state = {  }
    render() {
        return (
            <div className='card-info-grid'>
                <p className='info-label step-type'>{this.props.step_type}</p>
                <p className='info-label uid'>{this.props.uid}</p>
            </div>
        );
    }
}

export default CardInfo;