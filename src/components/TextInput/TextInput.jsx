import React from "react";
import "./TextInput.css"

export default function TextInput(props) {
    return(
        <div className="text-input-section">
            <p className="text-input-label"> {props.label} </p>
            <input 
                className="text-input"
                type="text" 
                value={props.value}
                onChange={
                    (e) => props.onUpdate(props.identifier, e.target.value)
                }
            />
        </div>
    )
}