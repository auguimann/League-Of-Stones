import React, {useEffect, useState} from 'react';
import './Deck.css';
import Card from './Card';

function Deck() {

    let [cards, setCards] = useState([]);
    let [deck, setDeck] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3001/cards").then(response => response.json()).then(data => {

            setCards(data);

        }).catch(err => console.error(err));

    }, []);

    function addToCards(card) {

        let tempCards = [...cards];
        tempCards.push(card);

        return tempCards;

    }

    function addToDeck(card) {

        let tempDeck = [...deck];
        tempDeck.push(card);

        if (tempDeck.length === 20) {

            document.querySelector("#deckButton").innerHTML =
                '<a href="#" role="button" class="btn btn-danger">J’ai fini</a>';

        }

        return tempDeck;

    }

    function removeFromCards(card) {

        let tempCards = [...cards];

        let id = tempCards.indexOf(card);
        tempCards.splice(id, 1);

        console.log(tempCards);

        return tempCards;

    }

    function removeFromDeck(card) {

        let tempDeck = [...deck];

        let id = tempDeck.indexOf(card);
        tempDeck.splice(id, 1);

        document.querySelector("#deckButton").innerHTML = "";

        return tempDeck;

    }

    function addDeck(card) {

        if(deck.length < 20) {

            setDeck(addToDeck(card));
            setCards(removeFromCards(card));

        } else {

            alert("Vous avez atteint le nombre maximum de cartes dans votre deck !");

        }

    }

    function removeDeck(card) {

        setDeck(addToCards(card));
        setCards(removeFromDeck(card));

    }

    const cardsList = cards.map(card => {

        return <Card name={card.key} title={card.title} attack={card.info.attack}
                     defense={card.info.defense} key={card._id} update={() => addDeck(card)}/>;

    });

    const deckList = deck.map(card => {

        return <Card name={card.key} title={card.title} attack={card.info.attack}
                     defense={card.info.defense} key={card._id} update={() => removeDeck(card)}/>;

    });

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-sm-6 cards">

                    <div className="row">

                        {cardsList}

                    </div>

                </div>
                <div className="col-sm-6 deck">

                    <div className="row">

                        <div id={"deckHeader"}>

                            <h1>Mon deck :</h1>
                            <div id={"deckButton"}/>

                        </div>
                        {deckList}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Deck;
