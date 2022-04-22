import CardSection from 'components/CardSection';
import SuggestionButton from 'components/SuggestionButton';
import React, { Component } from 'react';

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import addIcon from '../../assets/add-icon.png'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.message});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='card-wrapper'>
                <div className='card-container'>
                    <div className='card-header'>
                        <div className='card-number'>
                            {this.props.number}
                        </div>
                        <div className='card-header-actions'>
                            <div className='card-info'>
                                <select 
                                    className='action-type-selection'
                                    value={this.props.input_type}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "input_type", e.target.value)}
                                >
                                    <option value="text-100">Text-100</option>
                                    <option value="text-long">Text-Long</option>
                                    <option value="integer">Integer</option>
                                    <option value="decimal">Decimal</option>
                                    <option value="date">Date</option>
                                </select>
                                <div className='card-info-grid'>
                                    <p className='info-label step-type'>{this.props.step_type}</p>
                                    <p className='info-label uid'>{this.props.uid}</p>
                                </div>
                            </div>
                            <div className='action-icons'>
                                <p>Required</p>
                                <Toggle
                                    className='action-required'
                                    aria-label='No label tag'
                                    defaultChecked={this.props.required}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "required", e.target.checked)}
                                />
                                <img 
                                    className='hover-scale'
                                    src="https://img.icons8.com/material-outlined/24/000000/copy.png"
                                    alt="copy"
                                    onClick={() => this.props.onCreate(this.props.index, {
                                        step_type: this.props.step_type,
                                        message: this.props.message,
                                        help: this.props.help,
                                        input_type: this.props.input_type,
                                        required: this.props.required
                                    })} />
                                <img
                                    className='hover-scale'
                                    src="https://img.icons8.com/material-rounded/24/000000/trash.png" 
                                    alt="delete"
                                    onClick={() => this.props.onDelete(this.props.uid)}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-items'>
                            <CardSection label="Message:" hidden={false}>
                                <textarea 
                                    className='card-message'
                                    rows={2}
                                    value={this.props.message}
                                    onChange={
                                        (e) => this.props.onUpdate(this.props.index, "message", e.target.value)
                                    }
                                />
                            </CardSection>
                            <CardSection label="Help:" hidden={false}>
                                <input 
                                    className='card-help'
                                    value={this.props.help}
                                    onChange={
                                        (e) => this.props.onUpdate(this.props.index, "help", e.target.value)
                                    }
                                />
                            </CardSection>
                            <CardSection label="Image:" hidden={false}>
                                <input 
                                    className='card-help'
                                    value={this.props.help}
                                    onChange={
                                        (e) => this.props.onUpdate(this.props.index, "help", e.target.value)
                                    }
                                />
                            </CardSection>
                        </div>
                        <div className='card-add-buttons'>
                            <SuggestionButton text="Add image..."/>
                            <SuggestionButton text="Add condition..."/>
                            <SuggestionButton text="Add check..."/>
                            <SuggestionButton text="Add database..."/>
                        </div>
                    </div>
                </div>
                <div className='card-new'>
                    <img
                        className='hover-scale' 
                        src={addIcon}
                        alt="Add new step..."
                        onClick={() => this.props.onCreate(this.props.index, {})} />
                </div>
            </div>
        );
    }
}

export default Card;