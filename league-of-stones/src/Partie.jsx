import React, {useEffect} from 'react'

import './Partie.css'
function Partie(props) {

    useEffect( () => {

        fetch("http://localhost:3001/cards")
            .then(response => response.json())
            .then(data => {

                //this.setState({cards: data});
                console.log(data)

            }).catch(err => console.error(err));

    })
    function addToTable(card) {

        if(this.state.deck.length < 20) {

            let id = this.state.cards.indexOf(card);
            this.state.deck.push(card);
            this.setState({deck: this.state.deck});
            this.state.cards.splice(id, 1);
            this.setState({cards: this.state.cards});

        } else {

            alert("Vous avez atteint le nombre maximum de cartes que vous pouvez jouer !");

        }

    }
     function rmFromTable(card) {

        let id = this.state.deck.indexOf(card);
        this.state.cards.push(card);
        this.setState({cards: this.state.cards});
        this.state.deck.splice(id, 1);
        this.setState({deck: this.state.deck});
        document.querySelector("#deckButton").innerHTML = "";

    }
    const listCards = this.state.cards;
        const list = listCards.map(card => {

            return <Card name={card.key} title={card.title} attack={card.info.attack}
                         defense={card.info.defense} key={card._id} update={() => this.addToDeck(card)}/>;

        })

        const deckCards = this.state.deck;
        const deck = deckCards.map(card => {

            return <Card name={card.key} title={card.title} attack={card.info.attack}
                         defense={card.info.defense} keyID={card._id} update={() => this.rmFromDeck(card)}/>;

        })
    return (
        
            <div className="container-fluid main-partie" id="accueil">
                <div className="card-on-table">
                    <div className="row">
                        <div className="col-xl-1 col-md-1 mb-1 m-auto col">
                            {deck}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-1 col-md-1 mb-1 m-auto col">
                            <p>test</p>
                        </div>
                    </div>
                    <div className="row card-deck">
                        <div className="col-xl-1 col-md-1 mb-1 m-auto col">
                            {list}
                        </div>
                    </div>
                </div>
            </div>

        )

    }

export default Partie;
