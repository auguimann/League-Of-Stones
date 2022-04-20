import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom';
import Login from './Login'
import Signin from './Signin'
import Main from './Main'
import Account from "./Account";
import './App.css';

function App() {

    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    function updateToken(token) {

        setToken(token);

    }

    function updateMail(email) {

        setEmail(email)

    }

    return (

        <Router>

            <div>

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">

                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">League of Stones</Link>
                        <div className="collapse navbar-collapse">

                            <ul className="navbar-nav">

                                <li className="nav-item">

                                    <Link className="nav-link" to="/login">Se Connecter</Link>

                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to="/signin">S'inscrire</Link>

                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link btn btn-danger" id="logout" to="/account">Gestion
                                        du compte</Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>
                <Routes>
                    <Route path="/" element={<Main token={token}/>}/>

                    { token === "" &&

                        <Route path="/login" element={<Login token={token}
                             updateToken={updateToken} updateMail={updateMail}/>}/>

                        &&

                        <Route path="/signin" element={<Signin token={token}/>}/>

                    }
                    <Route path="/login" element={<Login token={token}
                         updateToken={updateToken} updateMail={updateMail}/>}/>
                    <Route path="/signin" element={<Signin token={token}/>}/>

                    { token !== "" &&

                        <Route path="/account" element={<Account token={token}
                             email={email} updateToken={updateToken} updateMail={updateMail}/>}/>

                    }

                </Routes>

            </div>

        </Router>

    );

}

export default App;
