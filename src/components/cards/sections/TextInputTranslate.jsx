import React from "react";
import TextInput from "components/TextInput/TextInput";

export default function TextInputTranslate(props) {
    /* Takes Props: */
    const onUpdate = (identifier) => {
        console.log(identifier)
    }
    return(
        <div className="text-input-translate-container">
            <div>
                <TextInput label={'Message - English'} onUpdate={onUpdate}/>
                <TextInput label={'Message - Français'} onUpdate={onUpdate}/>
            </div>
            
            <TextInput label={'Translation Key'} onUpdate={onUpdate}/>
        </div>
    )
}