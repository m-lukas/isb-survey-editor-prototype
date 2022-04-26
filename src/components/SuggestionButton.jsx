import React, { Component } from 'react';

class SuggestionButton extends Component {
    render() {
        var buttonClass = (this.props.enabled ? 'suggestion-button hover-scale' : 'hidden')

        return (
            <div className={buttonClass} onClick={this.props.onClick}>
                <p className='suggestion-text noselect'>{this.props.text}</p>
            </div>
        );
    }
}

export default SuggestionButton;