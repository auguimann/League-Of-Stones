function Main(props) {

    if(props.token === "") {

        return (

            <div className="container main" id="accueil">

                <h1>Bienvenue sur League of Stones</h1>
                <h2>Cliquez sur les onglets en haut de la page pour vous connecter ou vous inscrire</h2>

            </div>

        )

    } else {

        return (

            <div className="container main" id="accueil">

                <h1>Bienvenue sur League of Stones</h1>
                <button type="button" className="btn btn-danger">Démarrer un matchmaking</button>

            </div>

        )

    }

}

export default Main;
