import React, { Component } from 'react';
import Toggle from 'react-toggle'

class CardActions extends Component {
    render() {
        return (
            <div className='action-icons'>
                <p>Required</p>
                <Toggle
                    className='action-required'
                    aria-label='required'
                    defaultChecked={this.props.required}
                    onChange={(e) => this.props.onRequiredToggle(e)}
                />
                <img 
                    className='hover-scale'
                    src="https://img.icons8.com/material-outlined/24/000000/copy.png"
                    alt="copy"
                    onClick={() => this.props.onCopy()} />
                <img
                    className='hover-scale'
                    src="https://img.icons8.com/material-rounded/24/000000/trash.png" 
                    alt="delete"
                    onClick={() => this.props.onDelete()}/>
            </div>
        );
    }
}

export default CardActions;