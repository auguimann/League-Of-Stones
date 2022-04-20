import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';

function Matchmaking(props) {

    const [request, setRequest] = useState([]);
    const interval = setInterval(() => participate(), 3000)


    const componentWillUnmount = () => {
        clearInterval(interval)
    }

    const participate = () => {
        const headers = new Headers();
        headers.append("WWW-Authenticate", props.token);
        headers.append("Content-type", "application/json");

        fetch ('http://localhost:3001/matchmaking/participate', {
            method: 'GET',
            headers: headers,
        }).then(response => {
            if(response.status === 500) {
                alert("Vous avez déjà participé à un matchmaking");
            } else {
                return response.json()
            }
        }).then(response => {
            console.log(response.matchmakingID)
            // const request = response.request;
            // setRequest(request);
        }
        ).catch(error => {
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
        <div>
        <h1>Matchmaking</h1>
        <p>
            This is the matchmaking page.
            <button onClick={participate()}>BUTTON</button>
        </p>
        </div>
    );
}

export default Matchmaking;