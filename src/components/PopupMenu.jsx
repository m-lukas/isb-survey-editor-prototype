import React, {Component} from 'react';
import ClickAwayListener from 'react-click-away-listener';
import '../styles/popup-menu.css';

class PopupMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    render() {
        let {
            icon,
            icon_style,
            alt,
            height,
            width,
            options
        } = this.props;

        let popupClass = (this.state.menuOpen ? 'pm-popup' : 'pm-hidden');
        let last = new Date()

        const setPopup = (bool) => {
            let current = new Date();
            let time_since_last_click = current.getTime() - last.getTime();
            if(time_since_last_click > 50){
                if(this.state.menuOpen){
                    bool = false;
                }

                this.setState((state) => ({
                    ...state,
                    menuOpen: bool
                }));
            }
        }

        const selectOption = (callback) => {
            setPopup(false);
            callback()
        }

        return (
            <div className='pm-icon-container'>
                <img
                    className={icon_style}
                    src={icon}
                    alt={alt ? alt : ''}
                    height={height}
                    width={width}
                    onClick={() => setPopup(true)} />
                <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={popupClass}>
                        {Object.entries(options).map(([key, callback]) => (
                            <div className='pm-option pm-noselect' onClick={() => selectOption(callback)}>{key}</div>
                        ))}
                    </div>
                </ClickAwayListener>
            </div>
        );
    }
}

export default PopupMenu;