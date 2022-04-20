import {Form} from "react-final-form";
import {Link} from "react-router-dom";
import "./Account.css";

function Account(props) {

    const logout = () => {

        if(window.confirm("Êtes-vous sur de vouloir vous déconnecter ?")) {

            fetch('http://localhost:3001/logout', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                    'www-authenticate': props.token,

                },

            }).then(() => {

                props.updateToken("");
                props.updateMail("");

            }).catch(error => {

                console.error('Error:', error.status);

            });

        }

    }

    const rmAcc = () => {

        if(window.confirm("Êtes-vous sur de vouloir supprimer votre compte ?")) {

            const password = window.prompt("Entrez votre mot de passe pour supprimer le compte");
            fetch('http://localhost:3001/users/unsubscribe?' +
                'email='+props.email+"&password="+password, {

                method: 'GET',
                headers: {

                    'Content-Type': 'application/json',
                    'www-authenticate': props.token,

                },

            }).then(() => {

                props.updateToken("");
                props.updateMail("");
                document.querySelector(".main").innerHTML = "<h1>Compte supprimé</h1>"

            }).catch(error => {

                console.error('Error:', error);

            });

        }

    }

    if(props.token !== "") {

        return (

            <div className="main">

                <div className="account">

                    <h1>Gestion du compte :</h1>
                    <Form

                        onSubmit={logout}
                        render={({handleSubmit}) => (

                            <div className="container-fluid">

                                <form onSubmit={handleSubmit}>

                                    <button type="submit" id="accLogout" className="btn btn-danger">Déconnexion</button>

                                </form>

                            </div>

                        )}

                    />
                    <Form

                        onSubmit={rmAcc}
                        render={({handleSubmit}) => (

                            <div className="container-fluid">

                                <form onSubmit={handleSubmit}>

                                    <button type="submit" id="rmAcc" className="btn btn-danger">Supprimer mon compte</button>

                                </form>

                            </div>

                        )}

                    />

                </div>

            </div>

        );

    } else {

        return (

            <div className="main">

                <div className="account">

                    <Link className="btn btn-danger" to="/login">Connexion</Link>
                    <Link className="btn btn-danger" to="/signin">Créer mon compte</Link>

                </div>

            </div>

        );

    }

}

export default Account;
