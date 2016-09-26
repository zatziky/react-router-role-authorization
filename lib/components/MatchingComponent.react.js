import RoleAwareComponent from './RoleAwareComponent.react';
import React, { PropTypes } from 'react';

export default class Matching extends RoleAwareComponent {
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
