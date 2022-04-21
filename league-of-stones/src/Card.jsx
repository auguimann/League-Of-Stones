import React from 'react';
import './Card.css';

function Card(props) {

    const url = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+props.name+"_0.jpg";

    return (

        <div className="col-sm-6 col-md-5 col-lg-4 col-xxl-3">

            <div className="card heros" onClick={props.update}>

                <img src={url} className="card-img-top img-fluid" alt={props.name}/>
                <div className="card-body">

                    <p className="card-text">{props.name} : {props.title}</p>
                    <p className="card-text">Attaque : {props.attack}</p>
                    <p className="card-text">Défense : {props.defense}</p>

                </div>

            </div>

        </div>

    );

}

export default Card;
