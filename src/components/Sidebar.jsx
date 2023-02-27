import React, { Component } from 'react';
import Toggle from 'react-toggle'
import TranslationKeyPrefix from './TranslationKeyPrefix'

class Sidebar extends Component {
    render() {
        let databaseBoxClass = (this.props.db_enabled ? 'database-box' : 'hidden');

        return (
            <div className='sidebar-container'>
                <div className='sidebar-body'>
                    <div className='sidebar-input-section'>
                        <p className='filename-label'>Filename:</p>
                        <input
                            className='sidebar-input'
                            type="text"
                            value={this.props.filename}
                            onChange={
                                (e) => this.props.onUpdate("filename", e.target.value)
                            }
                        />
                    </div>
                    <TranslationKeyPrefix />
                    <div className='database-section'>
                        <p className='sidebar-label'>Database Enabled:</p>
                        <Toggle
                            className='action-required'
                            aria-label='required'
                            defaultChecked={this.props.db_enabled}
                            onChange={(e) => this.props.onUpdate("db_enabled", e.target.checked)}
                        />
                    </div>
                    <div className={databaseBoxClass}>
                        <div className='sidebar-input-section'>
                            <p className='sidebar-label'>Table:</p>
                            <input
                                className='sidebar-input'
                                type="text"
                                value={this.props.db_table}
                                onChange={
                                    (e) => this.props.onUpdate("db_table", e.target.value)
                                }
                            />
                        </div>
                        <div className='sidebar-input-section'>
                            <p className='sidebar-label'>ID-Name:</p>
                            <input
                                className='sidebar-input'
                                type="text"
                                value={this.props.db_id_column}
                                onChange={
                                    (e) => this.props.onUpdate("db_id_column", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;