import React, {Component} from "react";

class TranslationKeyPrefix extends Component {
    render() {
        return(
            <div>
                <p>Translation Key Prefix:</p>
                <input 
                    type="text" 
                    value={this.props.tkprefix}
                    onChange={
                        (e) => this.props.onUpdate('tkprefix', e.target.value)
                    }
                />
            </div>
        )
    }
}
export default TranslationKeyPrefix;