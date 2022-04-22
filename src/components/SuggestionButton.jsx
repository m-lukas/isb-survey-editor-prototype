import React, { Component } from 'react';

class SuggestionButton extends Component {
    render() {
        return (
            <div className='suggestion-button hover-scale'>
                <p className='suggestion-text noselect'>{this.props.text}</p>
            </div>
        );
    }
}

export default SuggestionButton;