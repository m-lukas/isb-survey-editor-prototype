import React from "react";

import removeIcon from '../../../assets/remove.png'

export default function OptionalSection(props) {
    /* Props:
        - label
        - enabled
        - onClick
    */
    let containerClass = (props.enabled ? 'opt-section-container' : 'hidden')

    return (
        <div className={containerClass}>
            <p className="opt-section-label">{props.label}</p>
            <div className="opt-section-flex">
                <div className="opt-section-body">
                    {props.children}
                </div>
                <div className="opt-section-remove">
                    <img 
                        className="hover-scale"
                        src={removeIcon}
                        alt="Remove Optional Section"
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </div>
    )
}
