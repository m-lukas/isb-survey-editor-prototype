import CardHeader from './sections/CardHeader';
import AddCardButton from 'components/AddCardButton';
import React from 'react';

import "react-toggle/style.css"
import "./BaseCard.css"

export default function BaseCard(props) {
    return (
        <div className='card-wrapper'>
            <div className='card-container'>
                <CardHeader
                    number={props.number}
                    header_selection={props.header_selection}
                    step_type={props.step_type}
                    uid={props.uid}
                    onCopy={() => props.onCopy()}
                    onDelete={() => props.onDelete()}
                    onRequiredToggle={(e) => props.onRequiredToggle}
                />
                <div className='card-body'>
                    {props.children}
                </div>
            </div>
            <AddCardButton onCreate={props.onCreate} />
        </div>
    )
}