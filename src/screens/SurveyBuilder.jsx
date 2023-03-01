import ActionCard from 'components/cards/ActionCard';
import MessageCard from 'components/cards/MessageCard';
import SelectionCard from 'components/cards/SelectionCard';
import Editor from 'components/Editor';
import Footer from 'components/Footer';
import React, { Component } from 'react';
import uuid from 'react-uuid'

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

class SurveyBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    uid: uuid(),
                    step_type: "message",
                    message: "What's your name?",
                    help: "First + Lastname",
                    image: "",
                    input_type: "text-100",
                    condition_value: '',
                    condition_step: '',
                    condition_operator: '',
                    compare_value: '',
                    compare_step: '',
                    compare_operator: '',
                    db_column: '',
                    required: true,
                    active_sections: {
                        message: true,
                        help: false,
                        image: false,
                        compare: false,
                        condition: false,
                        database: false
                    }
                },
                {
                    uid: uuid(),
                    step_type: "message",
                    message: "Please state the reason why you are here?",
                    help: "Please be specific.",
                    image: "",
                    input_type: "text-long",
                    condition_value: '',
                    condition_step: '',
                    condition_operator: '',
                    compare_value: '',
                    compare_step: '',
                    compare_operator: '',
                    db_column: '',
                    required: true,
                    active_sections: {
                        message: true,
                        help: false,
                        image: false,
                        compare: false,
                        condition: false,
                        database: false
                    }
                },
                {
                    uid: uuid(),
                    step_type: "message",
                    message: "How old are you?",
                    help: "Just your regulare age.",
                    image: "",
                    input_type: "integer",
                    condition_value: '',
                    condition_step: '',
                    condition_operator: '',
                    compare_value: '',
                    compare_step: '',
                    compare_operator: '',
                    db_column: '',
                    required: false,
                    active_sections: {
                        message: true,
                        help: false,
                        image: false,
                        compare: false,
                        condition: false,
                        database: false
                    }
                }
            ],
            config: {
                filename: '',
                tkprefix: '',
                db_enabled: true,
                db_table: '',
                db_id_column: ''
            }
        }
    };

    render() {
        const addCard = (idx, type, data) => {
            let card = {
                uid: uuid(),
                step_type: type,
                message: "",
                help: "",
                image: "",
                input_type: "",
                condition_value: '',
                condition_step: '',
                condition_operator: '',
                compare_value: '',
                compare_step: '',
                compare_operator: '',
                db_column: '',
                required: true,
                active_sections: {
                    message: true,
                    help: false,
                    image: false,
                    compare: false,
                    condition: false,
                    database: false
                }
            }

            for(const key in data) {
                card[key] = data[key]
            }

            var cardsCopy = [...this.state.cards];
            cardsCopy.splice(idx+1, 0, card);

            this.setState((state) => ({
                ...state,
                cards: cardsCopy
            }));
        }

        const deleteCard = (uid) => {
            const updatedCards = this.state.cards.filter((item) => item.uid !== uid);
            this.setState((state) => ({
                ...state,
                cards: updatedCards
            }));
        }

        const updateCard = (idx, item, value) => {
            let cards = [...this.state.cards];
            let card = {...cards[idx]};
            card[item] = value
            cards[idx] = card;
            this.setState({cards});
        }

        const updateConfig = (key, value) => {
            let config = {...this.state.config};
            config[key] = value;
            this.setState((state) => ({
                ...state,
                config: config
            }));
        }

        const getVisibleCards = (idx) => {
            return this.state.cards.map(card => {
                return {
                    "uid": card.uid,
                    "index": this.state.cards.indexOf(card),
                    "number": this.state.cards.indexOf(card)+1
                }
            }).filter(card => 
                card.index < idx
            )
        }

        const cardsArray = this.state.cards.map(card => {
            switch(card.step_type){
                case 'selection':
                    return (
                        <SelectionCard
                            {...card}
                            index={this.state.cards.indexOf(card)}
                            number={this.state.cards.indexOf(card)+1}
                            key={card.uid}
                            steps={getVisibleCards(this.state.cards.indexOf(card))}
                            onCreate={addCard}
                            onUpdate={updateCard}
                            onDelete={deleteCard} 
                        />
                    )
                case 'action':
                    return (
                        <ActionCard
                            {...card}
                            index={this.state.cards.indexOf(card)}
                            number={this.state.cards.indexOf(card)+1}
                            key={card.uid}
                            steps={getVisibleCards(this.state.cards.indexOf(card))}
                            onCreate={addCard}
                            onUpdate={updateCard}
                            onDelete={deleteCard} 
                        />
                    )
                default:
                    return (
                        <MessageCard
                            {...card}
                            index={this.state.cards.indexOf(card)}
                            number={this.state.cards.indexOf(card)+1}
                            key={card.uid}
                            steps={getVisibleCards(this.state.cards.indexOf(card))}
                            onCreate={addCard}
                            onUpdate={updateCard}
                            onDelete={deleteCard} 
                        />
                    )
            }
            
        });

        const getSurveyHref = () => {
            const dbConfig = {
                "create-db-entry": this.state.config.db_enabled,
                "table": this.state.config.db_table,
                "id-column": this.state.config.db_id_column
            }

            const stepArray = this.state.cards.map(card => {
                const index = this.state.cards.indexOf(card);
                const number = index+1;
                const hasSuccessor = (this.state.cards.length > number);
                let successorUid = null;

                if(hasSuccessor){
                    successorUid = this.state.cards[index+1].uid;
                }

                let stepObj = {
                    "id": card.uid,
                    "type": card.step_type,
                    "skip": {
                        "enabled": !card.required,
                        "jump-to": (hasSuccessor ? successorUid : null)
                    },
                    "message": this.state.config.tkprefix + card.message,
                    "input_type": card.input_type,
                    "successor": (hasSuccessor ? successorUid : null)
                }

                if(card.active_sections.help) stepObj["help"] = card.help;
                if(card.active_sections.database) stepObj["db-column"] = card.db_column;

                // compare + condition
                return stepObj
            });

            const surveyObj = {
                "db": dbConfig,
                "steps": stepArray
            }

            return `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(surveyObj))}`
        }

        return (
            <div className='surveybuilder-layout'>
                <Navbar 
                    saveHref={() => getSurveyHref()}
                    saveFilename={this.state.config.filename}
                />
                <div className='sidebar-layout'>
                    <Sidebar onUpdate={updateConfig} {...this.state.config} />
                    <Footer />
                </div>
                <Editor>
                    {cardsArray}
                </Editor>
            </div>
        );
    }
}

export default SurveyBuilder;