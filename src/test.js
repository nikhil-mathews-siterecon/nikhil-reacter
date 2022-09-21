import React from 'react';

export default class Para extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <p className={this.props.class}
                id={this.props.id}
                name={this.props.name}
                value={this.props.value}>
            </p>
        )
    }
}