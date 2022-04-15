import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Login'
import Signin from './Signin'
import Main from './Main'

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid"></div>
                    <ul>
                        <li>
                            <Link className="navbar-brand" to="/main">League of Stone</Link>
                        </li>
                        <li>
                            <Link className="navbar-brand" to="/login">Connexion</Link>
                        </li>
                        <li>
                            <Link className="navbar-brand" to="/signin">Inscription</Link>
                        </li>
                    </ul>
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
