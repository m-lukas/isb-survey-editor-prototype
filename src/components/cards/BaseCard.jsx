import CardHeader from './sections/CardHeader';
import AddCardButton from 'components/AddCardButton';
import React, { Component } from 'react';

import "react-toggle/style.css"

class BaseCard extends Component {
    render() {
        return (
            <div className='card-wrapper'>
                <div className='card-container'>
                    <CardHeader 
                        number={this.props.number}
                        header_selection={this.props.header_selection}
                        step_type={this.props.step_type}
                        uid={this.props.uid}
                        onCopy={() => this.props.onCopy()}
                        onDelete={() => this.props.onDelete()}
                        onRequiredToggle={(e) => this.props.onRequiredToggle}
                    />
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
                <AddCardButton onCreate={this.props.onCreate} />
            </div>
        );
    }
}

export default BaseCard;