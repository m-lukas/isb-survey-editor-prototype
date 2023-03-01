import React from "react";

export default function InputTypePicker(props) {
    const inputTypes = {
        "text-100": "Text-100",
        "text-long": "Text-Long",
        "integer": "Integer",
        "decimal": "Decimal",
        "date": "Date",
        "location": "Location",
        "picture": "Picture",
        "time": "Time (both)",
        "time12": "Time (12:00pm)",
        "time24": "Time (24:00)",
        "url": "Url",
        "phone_number": "Phonenumber"
    }
    return (
        <select 
            className='action-type-selection'
            value={props.input_type}
            onChange={(e) => props.onUpdate(props.index, "input_type", e.target.value)}
        >
            {Object.entries(inputTypes).map(([value, display]) => (
                <option value={value}>{display}</option>
            ))}
        </select>
    )
}