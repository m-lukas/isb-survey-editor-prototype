import React, { Component } from 'react';

class StaticCardSection extends Component {
    render() {
        return (
            <div className='card-section-container'>
                <p className='card-section-label'>{this.props.label}</p>
                <div className='card-section-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default StaticCardSection;