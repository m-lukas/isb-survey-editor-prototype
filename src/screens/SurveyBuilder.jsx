import Card from 'components/cards/MessageCard';
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
                    input_type: "text-100",
                    required: true
                },
                {
                    uid: uuid(),
                    step_type: "message",
                    message: "Please state the reason why you are here?",
                    help: "Please be specific.",
                    input_type: "text-long",
                    required: true
                },
                {
                    uid: uuid(),
                    step_type: "message",
                    message: "How old are you?",
                    help: "Just your regulare age.",
                    input_type: "integer",
                    required: false
                }
            ]
        }
    };

    render() {
        const addCard = (idx, data) => {
            let card = {
                uid: uuid(),
                step_type: "message",
                message: "",
                help: "",
                input_type: "",
                required: true
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

        const cardsArray = this.state.cards.map(card => (
            <Card
                {...card}
                index={this.state.cards.indexOf(card)}
                number={this.state.cards.indexOf(card)+1}
                key={card.uid}
                onCreate={addCard}
                onUpdate={updateCard}
                onDelete={deleteCard} />
        ));

        return (
            <div className='surveybuilder-layout'>
                <Navbar />
                <div className='sidebar-layout'>
                    <Sidebar />
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