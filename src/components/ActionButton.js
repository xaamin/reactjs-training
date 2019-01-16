import React, { Component } from 'react';

class ActionButton extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    handleClick() {
        const { data } = this.props;

        this.props.onClick(data)
    }

    render() {
        const { name, text } = this.props;

        console.count(this);

        return (
            <button { ...this.props } name={ name } onClick={ this.handleClick }>
                { text }
            </button>
        )
    }
}

export default ActionButton;