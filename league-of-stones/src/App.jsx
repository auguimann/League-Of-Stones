import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Login from './Login'
import Signin from './Signin'
import Main from './Main'
import Account from "./Account";
import './App.css';
import Deck from "./Deck";
import Matchmaking from "./Matchmaking";

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

                                {token === "" ?

                                    <>
                                    <li className="nav-item">

                                        <Link className="nav-link" to="/login">Se Connecter</Link>

                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link" to="/signin">S'inscrire</Link>

                                    </li>
                                    </>

                                    :

                                    <>
                                    <li className="nav-item">

                                        <Link className="nav-link" to="/matchmaking">Matchmaking</Link>

                                    </li>
                                    <li className="nav-item">

                                    <Link className="nav-link btn btn-danger" id="logout" to="/account">Gestion
                                    du compte</Link>

                                    </li>
                                    </>

                                }

                            </ul>

                        </div>

                    </div>

                </nav>
                <Routes>

                    <Route path="/" element={<Main token={token}/>}/>
                    <Route path="/login" element={

                        token === "" ?

                            <Login token={token} updateToken={updateToken} updateMail={updateMail}/>
                            : <Navigate replace to="/"/>

                    }/>
                    <Route path="/signin" element={<Signin token={token}/>}/>
                    <Route path="/account" element={

                        token !== "" ?

                            <Account token={token} email={email} updateToken={updateToken} updateMail={updateMail}/>
                            : <Navigate replace to="/login"/>

                    }/>
                    <Route path="/matchmaking" element={

                        token !== "" ?

                            <Matchmaking token={token}/>
                            : <Navigate replace to="/login"/>

                    }/>
                    <Route path="/deck" element={<Deck/>}/>

                </Routes>

            </div>

        </Router>

    );

}

export default App;
