import {Field, Form} from "react-final-form"

function Login() {
    const onSubmit = () => {
        alert("test")
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