import RoleAwareComponent from './RoleAwareComponent.react';

export default class AuthorizedForFirst extends RoleAwareComponent {

    constructor(props) {
        super(props);

        this.allowedRoles = [];
        // roles of the user - usually fetched during authentication
        this.userRoles = [];
    }

    render() {
        return (
            <div>
                {pickFirstAuthorizedComponent.call(this, this.props.children)}
            </div>
        );
    }
}

function pickFirstAuthorizedComponent(children){
    const component = children.find(child => {
        this.allowedRoles = child.props.roles;
        return this.rolesMatched();
    });

    return component ? component : null;
}
