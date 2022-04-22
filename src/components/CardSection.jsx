import React, { Component } from 'react';

class CardSection extends Component {
    render() {
        return (
            <div className={this.props.hidden ? 'hidden' : 'card-section-container'}>
                <p className='card-section-label'>{this.props.label}</p>
                <div className='card-section-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CardSection;