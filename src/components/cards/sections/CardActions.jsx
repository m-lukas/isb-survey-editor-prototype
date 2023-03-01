import React from 'react';
import Toggle from 'react-toggle'

export default function CardActions(props) {
    return(
        <div className='action-icons'>
            <p>Required</p>
            <Toggle 
                className='action-required'
                aria-label='required'
                defaultChecked={props.required}
                onChange={(e) => props.onRequiredToggle(e)}
            />
            <img 
                className='hover-scale'
                src="https://img.icons8.com/material-outlined/24/000000/copy.png" 
                alt="copy icon"
                onClick={() => props.onCopy()} 
            />
            <img
                className='hover-scale'
                src="https://img.icons8.com/material-rounded/24/000000/trash.png" 
                alt="delete icon"
                onClick={() => props.onDelete()}
            />
        </div>
    )
}