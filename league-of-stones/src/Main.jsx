import './Main.css'
import {Link} from "react-router-dom";
function Main(props) {

    if(props.token === "") {

        return (

            <div className="container-fluid main" id="accueil">
                <div className="main-page">
                    <h1>Bienvenue sur League of Stones</h1>
                    <h2>Cliquez sur les onglets en haut de la page pour vous connecter ou vous inscrire</h2>
                </div>
                

            </div>

        )

    } else {

        return (

            <div className="container-fluid main" id="accueil">
                <div className="main-page">
                    <h1>Bienvenue sur League of Stones</h1>
                    <Link className="btn btn-danger" to="/matchmaking">Matchmaking</Link>
                </div>
                
            </div>

        )

    }

}

export default Main;
