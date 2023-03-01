import React from "react";
import PopupMenu from "./PopupMenu";
import addIcon from '../assets/add-icon.png'

export default function AddCardButton(props) {
    return(
        <div className='card-new'>
            <PopupMenu
                icon={addIcon}
                icon_style='hover-scale'
                alt='Add card...'
                height='32px'
                width='32px'
                options={{
                    Message: () => props.onCreate("message"),
                    Selection: () => props.onCreate("selection"),
                    Action: () => props.onCreate("action"),
                }}
            />
        </div>
    )
    
}