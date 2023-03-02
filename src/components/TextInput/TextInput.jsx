import React from "react";
import "./TextInput.css"

export default function TextInput(props) {
    /* Takes props:
        - label: text of label
        - onUpdate: function (usually updateConfig) that takes two arguments. 
        An identifier (usually key in Config key value pair) and a value
        - identifier: String. Identifier in the onUpdate function 
    */
    return(
        <div className="text-input-section">
            <p className="text-input-label"> {props.label} </p>
            <input 
                className="text-input"
                type="text" 
                value={props.value}
                onChange={
                    (e) => props.onUpdate(e.target.value)
                }
            />
        </div>
    )
}