import CardActions from 'components/CardActions';
import CardInfo from 'components/CardInfo';
import PopupMenu from 'components/PopupMenu';
import React, { Component } from 'react';

import "react-toggle/style.css"

import addIcon from '../../assets/add-icon.png'

class BaseCard extends Component {
    render() {
        return (
            <div className='card-wrapper'>
                <div className='card-container'>
                    <div className='card-header'>
                        <div className='card-number'>
                            {this.props.number}
                        </div>
                        <div className='card-header-actions'>
                            <div className='card-info'>
                                {this.props.header_selection ? this.props.header_selection : ''}
                                <CardInfo step_type={this.props.step_type} uid={this.props.uid}/>
                            </div>
                            <CardActions
                                onCopy={() => this.props.onCopy()}
                                onDelete={() => this.props.onDelete()}
                                onRequiredToggle={(e) => this.props.onRequiredToggle(e)}
                            />
                        </div>
                    </div>
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