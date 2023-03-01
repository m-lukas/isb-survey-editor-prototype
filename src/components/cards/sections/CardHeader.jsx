import React from "react";
import CardInfo from "components/cards/sections/CardInfo";
import CardActions from "components/CardActions";

export default function CardHeader(props) {
    return(
        <div className='card-header'>
            <div className='card-number'>
                {props.number}
            </div>
            <div className='card-header-actions'>
                <CardInfo step_type={props.step_type} uid={props.uid}>
                    {props.header_selection ? props.header_selection : ''}
                </CardInfo>
                <CardActions
                    onCopy={() => props.onCopy()}
                    onDelete={() => props.onDelete()}
                    onRequiredToggle={(e) => props.onRequiredToggle(e)}
                />
            </div>
        </div>
    )
}