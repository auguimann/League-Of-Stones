import {useState} from 'react'
import './Matchmaking.css'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';



function Matchmaking(props) {

    const [request, setRequest] = useState([]);



    const participate = () => {
        const headers = new Headers();
        headers.append("www-authenticate", props.token);
        headers.append("Content-type", "application/json");

        fetch ('http://localhost:3001/matchmaking/participate', {
            method: 'GET',
            headers: headers,
        }).then(response => {
            if(response.status === 500) {
                alert("Vous avez déjà participé à un matchmaking");
            } else {
                document.querySelector("#waiting").innerHTML = "Vous êtes en attente de matchmaking";
                return response.json()
            }
        }).then(response => {
            console.log(response.matchmakingId)
            console.log(response.request)

            //const request = response.request;
            //setRequest(request);
        }
        ).catch(error => {
            console.error('Error:', error.status);
        }
        )
    }

    const unparticipate = () => {
        const headers = new Headers();
        headers.append("www-authenticate", props.token);
        headers.append("Content-type", "application/json");

        fetch ('http://localhost:3001/matchmaking/unparticipate', {
            method: 'GET',
            headers: headers,
        }).then(response => {
            if(response.status === 200) {
                document.querySelector("#waiting").innerHTML = "";
                console.log("Vous n'êtes plus dans un matchmaking");
            }

            if (response.status === 500) {
                alert("Vous n'êtes pas dans un matchmaking");
            }
        }).catch(error => {
            console.error('Error:', error.status);
        }
        )
    }

    const requestAPlayer = () => {
        const headers = new Headers();
        headers.append("WWW-Authenticate", props.token);
        headers.append("Content-type", "application/json");

        fetch ('http://localhost:3001/matchmaking/request', {
            method: 'GET',
            headers: headers,
        }).then(response => {
            if(response.status === 500) {
                alert("Vous avez déjà demandé à un matchmaking");
            } else {
                return response.json()
            }
        }).then(response => {
            console.log(response)
        }
        ).catch(error => {
            console.error('Error:', error.status);
        }
        )
    }

    const acceptRequest = (id) => {
        const headers = new Headers();
        headers.append("WWW-Authenticate", props.token);
        headers.append("Content-type", "application/json");

        fetch ('http://localhost:3001/matchmaking/acceptRequest', {
            method: 'GET',
            headers: headers,
        }).then(response => {
            if(response.status === 500) {
                alert("Vous avez déjà accepté une demande");
            } else {
                return response.json()
            }
        }).then(response => {
            console.log(response.player1.name)
        }
        ).catch(error => {
            console.error('Error:', error.status);
        }
        )
    }





    return (
        <div className="container-fluid matchmaking">
            <div className="match">
                <h1>Matchmaking</h1>
                <p>This is the matchmaking page.</p>
                <button className="btn btn-light btnMatch" onClick={participate}>Start</button>
                <button className="btn btn-danger btnMatch" onClick={unparticipate}>Quit</button>
                <div id="waiting"></div>
            </div>
        </div>
    );
}

export default Matchmaking;