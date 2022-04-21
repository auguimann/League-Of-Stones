import React, {useEffect} from 'react'

import './Partie.css'

    let [cards, setState] = useState([])

    useEffect( () => {

        fetch("http://localhost:3001/cards")
            .then(response => response.json())
            .then(data => {

                //setState({cards: data});
                console.log(data)

            }).catch(err => console.error(err));

    })
    function addToTable(card) {

        if(props.state.table.length < 20) {

            let id = props.state.cards.indexOf(card);
            props.state.table.push(card);
            setState({table: props.state.table});
            props.state.cards.splice(id, 1);
            setState({cards: props.state.cards});

        } else {

            alert("Vous avez atteint le nombre maximum de cartes que vous pouvez jouer !");

        }

    }
     function rmFromTable(card) {

        let id = props.state.table.indexOf(card);
        props.state.cards.push(card);
        setState({cards: props.state.cards});
        props.state.table.splice(id, 1);
        setState({table: props.state.table});

    }
    const listDeck = props.state.cards;
        const list = listCards.map(card => {

            <Card name={card.key} title={card.title} attack={card.info.attack} defense={card.info.defense} key={card._id} update={() => addToDeck(card)}/>;

        })

        const listeTable = props.state.deck;
        const deck = deckCards.map(card => {

             <Card name={card.key} title={card.title} attack={card.info.attack} defense={card.info.defense} keyID={card._id} update={() => rmFromDeck(card)}/>;

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
