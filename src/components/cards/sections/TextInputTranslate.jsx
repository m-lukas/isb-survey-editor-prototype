import React from "react";
import TextInput from "components/TextInput/TextInput";

export default function TextInputTranslate(props) {
    /* Takes Props: 
        - index
        - onUpdate
    */
    const logChange = (e) => {
        console.log(e)
    }
    const updateMessageTK = (value) => {
        props.onUpdate(props.index, 'message', value)
    }
    return(
        <div className="text-input-translate-container">
            <div>
                <TextInput label={'Message - English'} onUpdate={logChange}/>
                <TextInput label={'Message - Français'} onUpdate={logChange}/>
            </div>
            
            <TextInput label={'Translation Key'} onUpdate={updateMessageTK}/>
        </div>
    )
}