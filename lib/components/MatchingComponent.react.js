import React, { PropTypes } from 'react';

export default class Matching extends React.Component {
    static propTypes = {
        roles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
