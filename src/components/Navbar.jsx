import React, { Component } from 'react';
import ElevatedButton from '../components/ElevatedButton.jsx'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <p className="navbar-title">Impact-Survey-Bot</p>
                <div className='navbar-button-section'>
                    <ElevatedButton text="Translations" />
                    <div className='width-25'></div>
                    <ElevatedButton text="Save" />
                </div>
            </div>
        );
    }
}

export default Navbar;