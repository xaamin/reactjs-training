import React, { Component } from 'react'
import ActionButton from '../components/ActionButton';

export class CartCheckOut extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  handleOnClick() {
    alert('Pagando...')
  }

  render() {
    console.count(this);
    
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
