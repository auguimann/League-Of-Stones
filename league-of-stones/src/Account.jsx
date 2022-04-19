import {Form} from "react-final-form";
import {Link} from "react-router-dom";

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
                <h1>Gestion du compte :</h1>
                <Form

                    onSubmit={logout}
                    render={({handleSubmit}) => (

                        <>
                            <div className="container-fluid" id="gestion">

                                <form onSubmit={handleSubmit}>

                                    <button type="submit" className="btn btn-outline-danger">Déconnexion</button>

                                </form>

                            </div>
                        </>

                    )}

                />
                <Form

                    onSubmit={rmAcc}
                    render={({handleSubmit}) => (

                        <>
                            <div className="container-fluid" id="gestion">

                                <form onSubmit={handleSubmit}>

                                    <button type="submit" className="btn btn-outline-danger">Supprimer mon compte</button>

                                </form>

                            </div>
                        </>

                    )}

                />
        </div>

        );

    } else {

        return (

            <div className="main">

                <h2>Connectez-vous pour pouvoir gérer votre compte :</h2>
                <Link className="btn btn-outline-danger" to="/login">Connexion</Link>
                <h2>Si vous n'avez pas de compte, vous pouvez en créer un ici :</h2>
                <Link className="btn btn-outline-danger" to="/signin">Créer mon compte</Link>

            </div>

        );

    }

}

export default Account;
