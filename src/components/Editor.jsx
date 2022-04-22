import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return (
            <div className='editor-layout'>
                <div className='editor-flex'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Editor;