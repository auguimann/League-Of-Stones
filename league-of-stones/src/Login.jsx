import {Field, Form} from "react-final-form"

function Login() {
    const onSubmit = values => {

        const newVal = {"email": values.pseudo + "@l3.fr", "password": values.mdp};
        fetch ('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify(newVal)
        
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((error) => {

                console.error('Error:', error);
                console.log(JSON.stringify(newVal))
            });

    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <>
                <h1>Se connecter</h1>
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