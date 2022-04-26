import React, { Component } from 'react';

import "react-toggle/style.css"

import BaseCard from './BaseCard';

class ActionCard extends Component {
    render() {
        return (
            <BaseCard
                {...this.props}
                onCopy={() => this.props.onCreate(
                    this.props.index,
                    this.props.step_type
                )}
                onDelete={() => this.props.onDelete(this.props.uid)}
                onRequiredToggle={(e) => this.props.onUpdate(this.props.index, "required", e.target.checked)}
                onCreate={(type) => this.props.onCreate(this.props.index, type, {})}
            >
                <div className='card-items'>
                </div>
            </BaseCard>
        );
    }
}

export default ActionCard;