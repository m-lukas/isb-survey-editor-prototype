import React, {Component} from "react";
import "./TextInput.css"
 

class TextInput extends Component {
    render() {
        return(
            <div className="text-input-section">
                <p className="text-input-label"> {this.props.label} </p>
                <input 
                    className="text-input"
                    type="text" 
                    value={this.props.value}
                    onChange={
                        (e) => this.props.onUpdate(this.props.identifier, e.target.value)
                    }
                />
            </div>
        )
    }
}
export default TextInput;