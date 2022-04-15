import {Field, Form} from "react-final-form"

function Login() {
    const onSubmit = values => {

        const newVal = {"email": values.mail, "password": values.mdp};
        fetch ('http://localhost:3001/login', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify(newVal),
        
        }).then(response => {

            if(response.status === 500) {

                alert("E-mail ou mot de passe incorrect");

            } else {

                document.querySelector("#form").innerHTML =
                    "<h1>Vous êtes connecté !</h1>";
                document.querySelector("#login").innerHTML = "";

            }

        }).catch(error => {

            console.error('Error:', error.status);

        });

    }
    return (

        <Form

            onSubmit={onSubmit}
            render={({ handleSubmit }) => (

                <>
                    <h1 id="login">Se connecter</h1>
                    <div className="container" id="form">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="htmlFor" className="form-label">mail</label>
                                <Field
                                    name="mail"
                                    component="input"
                                    className="form-control"
                                    id="mail"
                                />
                                <label htmlFor="mdp" className="form-label">Mot de passe</label>
                                <Field
                                    name="mdp"
                                    component="input"
                                    type="password"
                                    className="form-control"
                                    id="mdp"
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-danger">Connect</button>
                        </form>
                    </div>
                </>
            )}
        />
    );
}
export default Login;