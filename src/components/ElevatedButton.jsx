import React, { Component } from 'react';

class ElevatedButton extends Component {
    render() {
        const {text, href} = this.props;
        let hrefString = ''
        if(href){
            hrefString = href();
        }

        return (
            <a
                className='elevatedbutton-container hover-scale'
                href={hrefString}
                download={this.props.filename}
            >
                <p className='elevatedbutton-text'>{text}</p>
            </a>
        );
    }
}

export default ElevatedButton;