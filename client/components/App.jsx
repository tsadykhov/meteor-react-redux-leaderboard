/**
 * Created by tsadykhov on 12/7/16.
 */

import React from 'react';
import PlayerList from './PlayerList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Player List </h1>

                <PlayerList />
            </div>
        )
    }
}

App.propTypes = {

};

export default App;