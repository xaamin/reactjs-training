import React, { Component } from 'react'
import ActionButton from '../components/ActionButton';

export class CartCheckOut extends Component {
  handleOnClick() {
    alert('Pagando...')
  }

  render() {
    return (
      <div>
        <ActionButton
          type="button"
          name="checkout"
          text="Pagar"
          onClick={ this.handleOnClick }
          />
      </div>
    )
  }
}

export default CartCheckOut
