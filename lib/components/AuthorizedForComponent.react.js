import RoleAwareComponent from './RoleAwareComponent.react';
import React, { PropTypes } from 'react';

export default class AuthorizedFor extends RoleAwareComponent {
    static propTypes = {
        roles: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.allowedRoles = this.props.roles;
        // roles of the user - usually fetched during authentication
        this.userRoles = [];
    }

    render() {
        if(!this.rolesMatched()){
            return null;
        }

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}