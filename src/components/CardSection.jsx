import React, { Component } from 'react';

import removeIcon from '../assets/remove.png'

class CardSection extends Component {
    render() {
        let containerClass = (this.props.enabled ? 'card-section-container' : 'hidden')

        return (
            <div className={containerClass}>
                <p className='card-section-label'>{this.props.label}</p>
                <div className='card-section-grid'>
                    <div className='card-section-body'>
                        {this.props.children}
                    </div>
                    <div className='card-section-remove'>
                        <img
                            className='hover-scale' 
                            src={removeIcon}
                            alt="Add new step..."
                            onClick={this.props.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CardSection;