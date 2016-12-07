/**
 * Created by tsadykhov on 12/7/16.
 */

import React from 'react';
import Player from './Player.jsx';

//import { createContainer } from 'meteor/react-meteor-data';

//import { Players } from '../../imports/players';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
    }

    getPlayers() {
        return [
            {name: "Ada Lovelace"},
            {name: "Grace Hopper"},
            {name: "Nikola Tesla"}
        ]
    }

    renderPlayers() {
        //return this.props.players.map((player) =>(
        return this.getPlayers().map((player) =>(
            <Player player={player} />
        ));
    }

    render() {
        return (
            <ul>
                {this.renderPlayers()}
            </ul>
        )
    }
}

PlayerList.propTypes = {
    //players: React.PropTypes.array.isRequired
};

export default PlayerList;

/*export default createContainer(() => {
    return {
        players: Players.find({}).fetch()
    };
}, PlayerList);*/
