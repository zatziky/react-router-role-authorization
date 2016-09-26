import { PropTypes } from 'react';

export default class Matching {
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
