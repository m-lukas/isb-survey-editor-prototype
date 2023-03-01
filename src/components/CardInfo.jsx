import React from 'react';

export default function CardInfo(props) {
    return(
        <div className='card-info'>
            {props.children}
            <div className='card-info-grid'>
                <p className='info-label step-type'>{props.step_type}</p>
                <p className='info-label uid'>{props.uid}</p>
            </div>
        </div>
    )
}