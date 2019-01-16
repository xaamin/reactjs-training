import React, { Component } from 'react';

class ActionButton extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { data } = this.props;

        this.props.onClick(data)
    }

    render() {
        console.log('PROPS', this.props)

        const { name, text } = this.props;

        return (
            <button type="button" name={ name } onClick={ this.handleClick }>
                { text }
            </button>
        )
    }
}

export default ActionButton;