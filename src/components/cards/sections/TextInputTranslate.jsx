import React from "react";
import TextInput from "components/TextInput/TextInput";

export default function TextInputTranslate(props) {
    /* Takes Props: 
        - index
        - onUpdate
        - identifier
    */
    const logChange = (e) => {
        console.log(e)
    }
    const updateCardParam = (value) => {
        props.onUpdate(props.index, props.identifier, value)
    }
    return(
        <div className="text-input-translate-container">
            <div>
                <TextInput label={'Message - English'} onUpdate={logChange}/>
                <TextInput label={'Message - Français'} onUpdate={logChange}/>
            </div>
            
            <TextInput label={'Translation Key'} onUpdate={updateCardParam}/>
        </div>
    )
}