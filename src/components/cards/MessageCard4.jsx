import CardActions from 'components/CardActions';
import CardInfo from 'components/CardInfo';
import CardSection from 'components/CardSection';
import PopupMenu from 'components/PopupMenu';
import StaticCardSection from 'components/StaticCardSection';
import SuggestionButton from 'components/SuggestionButton';
import React, { Component } from 'react';

import "react-toggle/style.css"

import addIcon from '../../assets/add-icon.png'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        const toggleSection = (section) => {
            let activeSections = {...this.props.active_sections};
            activeSections[section] = !activeSections[section];

            this.props.onUpdate(this.props.index, "active_sections", activeSections)
        }

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

        const compareOperators = {
            "<": "less (<)",
            "<=": "less or equal (<=)",
            "=": "equals (=)",
            ">=": "greater or equal (>=)",
            ">": "greater",
            ">midnight": "later time (incl. midnight)"
        }

        const conditionOperators = {
            "<": "less (<)",
            "<=": "less or equal (<=)",
            "=": "equals (=)",
            ">=": "greater or equal (>=)",
            ">": "greater",
            "has-selected": "selected",
            "has-group": "has group"
        }

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
                                    {Object.entries(inputTypes).map(([value, display]) => (
                                        <option value={value}>{display}</option>
                                    ))}
                                </select>
                                <CardInfo step_type={this.props.step_type} uid={this.props.uid}/>
                            </div>
                            <CardActions
                                onCreate={() => this.props.onCreate(
                                    this.props.index,
                                    this.props.step_type,
                                    {
                                        message: this.props.message,
                                        help: this.props.help,
                                        image: this.props.image,
                                        input_type: this.props.input_type,
                                        condition_value: this.props.condition_value,
                                        condition_step: this.props.condition_step,
                                        condition_operator: this.props.condition_operator,
                                        compare_value: this.props.compare_value,
                                        compare_step: this.props.compare_step,
                                        compare_operator: this.props.compare_operator,
                                        required: this.props.required,
                                        active_sections: this.props.active_sections
                                    }
                                )}
                                onDelete={() => this.props.onDelete(this.props.uid)}
                                onRequiredToggle={(e) => this.props.onUpdate(this.props.index, "required", e.target.checked)}
                            />
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-items'>
                            <StaticCardSection label="Message:">
                                <textarea
                                    className='card-message'
                                    rows={2}
                                    value={this.props.message}
                                    onChange={
                                        (e) => this.props.onUpdate(this.props.index, "message", e.target.value)
                                    }
                                />
                            </StaticCardSection>
                            <CardSection 
                                label="Help:"
                                enabled={this.props.active_sections.help}
                                onClick={() => toggleSection("help")}>
                                    <input 
                                        className='card-help'
                                        value={this.props.help}
                                        onChange={
                                            (e) => this.props.onUpdate(this.props.index, "help", e.target.value)
                                        }
                                    />
                            </CardSection>
                            <CardSection
                                label="Condition (if condition is not met, step will be skipped):"
                                enabled={this.props.active_sections.condition}
                                onClick={() => toggleSection("condition")}>
                                    <select 
                                    className='action-type-selection'
                                    value={this.props.condition_operator}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "condition_operator", e.target.value)}
                                    >
                                        {Object.entries(conditionOperators).map(([value, display]) => (
                                            <option value={value}>{display}</option>
                                        ))}
                                    </select>
                                    <select 
                                    className='action-type-selection'
                                    value={this.props.condition_step}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "condition_step", e.target.value)}
                                    >
                                        <option value=''>Custom Value</option>
                                        {this.props.steps.map((step) => (
                                            <option value={step.uid}>Value of step {step.number}</option>
                                        ))}
                                    </select>
                                    <input 
                                        className='card-compare'
                                        value={this.props.condition_value}
                                        onChange={
                                            (e) => this.props.onUpdate(this.props.index, "condition_value", e.target.value)
                                        }
                                    />
                            </CardSection>
                            <CardSection
                                label="Compare (compares input to value):"
                                enabled={this.props.active_sections.compare}
                                onClick={() => toggleSection("compare")}>
                                    <select 
                                    className='action-type-selection'
                                    value={this.props.compare_operator}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "compare_operator", e.target.value)}
                                    >
                                        {Object.entries(compareOperators).map(([value, display]) => (
                                            <option value={value}>{display}</option>
                                        ))}
                                    </select>
                                    <select 
                                    className='action-type-selection'
                                    value={this.props.compare_step}
                                    onChange={(e) => this.props.onUpdate(this.props.index, "compare_step", e.target.value)}
                                    >
                                        <option value=''>Custom Value</option>
                                        {this.props.steps.map((step) => (
                                            <option value={step.uid}>Value of step {step.number}</option>
                                        ))}
                                    </select>
                                    <input 
                                        className='card-compare'
                                        value={this.props.compare_value}
                                        onChange={
                                            (e) => this.props.onUpdate(this.props.index, "compare_value", e.target.value)
                                        }
                                    />
                            </CardSection>
                            <CardSection
                                label="Image:"
                                enabled={this.props.active_sections.image}
                                onClick={() => toggleSection("image")}>
                                    <input 
                                        className='card-regular-input'
                                        value={this.props.image}
                                        onChange={
                                            (e) => this.props.onUpdate(this.props.index, "image", e.target.value)
                                        }
                                    />
                            </CardSection>
                            <CardSection
                                label="Database-Column:"
                                enabled={this.props.active_sections.database}
                                onClick={() => toggleSection("database")}>
                                    <input 
                                        className='card-regular-input'
                                        value={this.props.db_column}
                                        onChange={
                                            (e) => this.props.onUpdate(this.props.index, "db_column", e.target.value)
                                        }
                                    />
                            </CardSection>
                        </div>
                        <div className='card-add-buttons'>
                            <SuggestionButton text="Add help..." enabled={!this.props.active_sections.help} onClick={() => toggleSection("help")} />
                            <SuggestionButton text="Add image..." enabled={!this.props.active_sections.image} onClick={() => toggleSection("image")}/>
                            <SuggestionButton text="Add condition..." enabled={!this.props.active_sections.condition} onClick={() => toggleSection("condition")}/>
                            <SuggestionButton text="Add comparision..." enabled={!this.props.active_sections.compare} onClick={() => toggleSection("compare")}/>
                            <SuggestionButton text="Add database..." enabled={!this.props.active_sections.database} onClick={() => toggleSection("database")}/>
                        </div>
                    </div>
                </div>
                <div className='card-new'>
                    <PopupMenu
                        icon={addIcon}
                        icon_style='hover-scale'
                        alt='Add card...'
                        height='32px'
                        width='32px'
                        options={{
                            Message: () => this.props.onCreate(this.props.index, 'message', {}),
                            Selection: () => this.props.onCreate(this.props.index, 'selection', {}),
                            Action: () => this.props.onCreate(this.props.index, 'action', {}),
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Card;