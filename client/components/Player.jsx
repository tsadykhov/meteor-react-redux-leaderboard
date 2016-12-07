/**
 * Created by tsadykhov on 12/7/16.
 */

import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.player.name}
            </li>
        )
    }
}

MyComponent.propTypes = {
    player: React.PropTypes.object.isRequired
};

export default MyComponent;