import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Login'
import Signin from './Signin'
import Main from './Main'

function App() {

    return (

        <Router>

            <div>

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">

                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">League of Stones</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav">

                                <li className="nav-item">

                                    <Link className="nav-link" to="/login">Se Connecter</Link>

                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to="/signin">S'inscrire</Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>
                <Routes>

                    <Route path="/main" element={<Main/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signin" element={<Signin/>}/>

                </Routes>

            </div>

        </Router>

    );

}

export default App;
