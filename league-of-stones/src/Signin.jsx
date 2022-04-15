import {Field, Form} from "react-final-form"

function Signin() {

    const onSubmit = values => {
        if(values.name === undefined|| values.password === undefined|| values.mdp_confirm === undefined) {
            alert("Vous devez remplir tous les champs")
        } else {
            if (values.pseudo.trim() === "") {
                alert("entrez un pseudo")
            } else if (values.mdp.trim() === "") {
                alert("entrez un mot de passe") 
            } else if (values.mdp_confirm.trim() === "") {
                alert("veuillez confirmé le mot de passe")
            } else if (values.mdp !== values.mdp_confirm) {
                alert("Les mots de passe ne correspondent pas")
            } else {
                const newVal = {"name": values.name, "email": values.name +"@L3.fr", "password": values.mdp }
                fetch ('http://localhost:3001/user', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newVal),
                }
                ).then(response => response.json()).then(() => {
                    document.querySelector("#form").innerHTML = "<h1>votre compte a ete crée</h1>"
                }).catch((error ) => {
                    console.error('Error:', error);
                });
            }
        }
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <>
                <h1>S'inscrire</h1>
                <div className="container" id="Form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="htmlFor" className="form-label">Pseudo</label>
                            <Field
                                name="pseudo"
                                component="input"
                                className="form-control"
                                id="pseudo"
                            />
                            <label htmlFor="mdp" className="form-label">Mot de passe</label>
                            <Field
                                name="mdp"
                                component="input"
                                type="password"
                                className="form-control"
                                id="mdp"
                            />
                            <label htmlFor="mdp" className="form-label">Confirm Mot de passe</label>
                            <Field
                                name="mdp_confirm"
                                component="input"
                                type="password"
                                className="form-control"
                                id="mdp_confirm"
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
export default Signin;