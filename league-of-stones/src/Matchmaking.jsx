import React from 'react'

class MatchakingTab extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            requests: []
        };
        this.interval = setInterval(
            () => this.refresh(), 3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    requestAPlayer(e, index) {
        e.preventDefault();
        axios
            .get(
                SERVER_URL +
                "/matchmaking/request?matchmakingId=" + this.props.matchmakingIds[index].matchmakingId + "&token=" + this.props.userReducer.userData.data.token
            );
    }

    acceptRequest(e, index) {
        e.preventDefault();
        axios
            .get(
                SERVER_URL +
                "/matchmaking/acceptRequest?matchmakingId=" + this.props.matchmakingIds[index].matchmakingId + "&token=" + this.props.userReducer.userData.data.token
            );
    }

    allPlayers() {
        if (this.props.type === "availablePlayers") {
            let ret = [];
            (this.props.players || []).map((player, index) => {
                let defyButton = this.defyButton((player, index))
                ret.push(
                    <TableRow key={index}>
                        <TableCell>{player}</TableCell>
                        <TableCell onClick={(e) => this.requestAPlayer(e, index)}>{defyButton} </TableCell>
                    </TableRow>
                )
            })
            return ret
        }
        else {
            let ret = [];
            let cpt = 0
            (this.state.requests || []).map((player, index) => {
                cpt += 1
                let defyButton = this.defyButton((player, index))
                ret.push(
                    <TableRow key={cpt}>
                        <TableCell>{player.name}</TableCell>
                        <TableCell onClick={() => this.acceptRequest(index)}>{defyButton} </TableCell>
                    </TableRow>
                )
            })
            return ret
        }
    }

    refresh() {
        axios
            .get(
                SERVER_URL +
                "/matchmaking/participate?token=" + this.props.userReducer.userData.data.token
            )
            .then(response => {
                this.setState({
                    requests: response.data.data.request
                });
            });
    }

    render() {
        return (
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableCell>
                                {this.props.title}
                            </TableCell>
                        </TableHead>
                        <TableBody>
                            {this.allPlayers()}
                        </TableBody>
                    </Table>
                </Paper>
                {/* {this.props.type === "challengeRequests" ?
                    <Fab color="primary" aria-label="Add" onClick={() => this.refresh()}>
                        <RefreshIcon />
                    </Fab> : null
                } */}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        userReducer: state.userReducer
    }
}
    
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchakingTab)