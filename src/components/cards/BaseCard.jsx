import CardHeader from './sections/CardHeader';
import PopupMenu from 'components/PopupMenu';
import React, { Component } from 'react';

import "react-toggle/style.css"

import addIcon from '../../assets/add-icon.png'

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
                <div className='card-new'>
                    <PopupMenu
                        icon={addIcon}
                        icon_style='hover-scale'
                        alt='Add card...'
                        height='32px'
                        width='32px'
                        options={{
                            Message: () => this.props.onCreate("message"),
                            Selection: () => this.props.onCreate("selection"),
                            Action: () => this.props.onCreate("action"),
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default BaseCard;