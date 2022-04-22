import React, { Component } from 'react';

class ElevatedButton extends Component {
    render() {
        const text = this.props.text;

        return (
            <div className='elevatedbutton-container'>
                <p className='elevatedbutton-text'>{text}</p>
            </div>
        );
    }
}

export default ElevatedButton;