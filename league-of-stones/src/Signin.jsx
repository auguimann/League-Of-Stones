import {Field, Form} from "react-final-form";

function Signin() {

    const onSubmit = values => {

        if(values.name === undefined || values.password === undefined || values.passwordConfirm === undefined) {

            alert("Au moins un des champs est vide");

        } else {

            if(values.name.trim() === "") {

                alert("Veuillez rentrer un pseudo");

            } else if(values.password.trim() === "") {

                alert("Veuillez rentrer un mot de passe");

            } else if(values.passwordConfirm.trim() === "") {

                alert("Veuillez confirmer votre mot de passe");

            } else if(values.password !== values.passwordConfirm) {

                alert("Les mots de passe ne concordent pas");

            } else {

                const newVal = {"name": values.name, "email": values.name + "@l3.fr", "password": values.password};
                fetch('http://localhost:3001/user', {

                    method: 'PUT',
                    headers: {

                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(newVal),

                }).then(response => response.json()).then(() => {

                    document.querySelector("#form").innerHTML =
                        "<h1>Votre compte à bien été créé</h1>"

                }).catch((error) => {

                    console.error('Error:', error);

                });

            }

        }

    }

    return (

        <Form

            onSubmit={onSubmit}
            render={({ handleSubmit }) => (

                <div id="signin">
                    <h1 id="titleForm">S'inscrire</h1>
                    <div className="container" id="form">

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label htmlFor="name" className="form-label">Pseudo</label>
                                <Field

                                    name="name"
                                    component="input"
                                    className="form-control"
                                    id="name"

                                />
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <Field

                                    name="password"
                                    component="input"
                                    type="password"
                                    className="form-control"
                                    id="password"

                                />
                                <label htmlFor="passwordConfirm" className="form-label">Confirmez votre mot de passe</label>
                                <Field

                                    name="passwordConfirm"
                                    component="input"
                                    type="password"
                                    className="form-control"
                                    id="passwordConfirm"

                                />

                            </div>
                            <button type="submit" className="btn btn-outline-danger">Inscription</button>

                        </form>

                    </div>
                </div>

            )}

        />

    );

}

export default Signin
