import React from "react";

export default function ConditionSection(props) {
    /* Props:
        - index
        - onUpdate
        - 
    */
    const conditionOperators = {
        "<": "less (<)",
        "<=": "less or equal (<=)",
        "=": "equals (=)",
        ">=": "greater or equal (>=)",
        ">": "greater",
        "has-selected": "selected",
        "has-group": "has group"
    }
    const changeCondition = (value) => {
        props.onUpdate(props.index, 'condition_operator', value)
    }
    return(
        <div>
            <select
                value={props.condition_operator}
                onChange={(e) => changeCondition(e.target.value)}>
                    opt
            </select>
        </div>
    )
}