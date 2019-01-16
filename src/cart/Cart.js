import React, { Component } from 'react'
import CartList from './CartList';
import CartCheckOut from './CartCheckOut';

export class Cart extends Component {
  render() {
    const { products, onAdd, onRemove, onDelete } = this.props;

    return (
      <div>
        <h4>Cart</h4>

        <CartList
          products={ products }
          onAdd={ onAdd }
          onRemove={ onRemove }
          onDelete={ onDelete }
          />
          
        <CartCheckOut products={ products } />
      </div>
    )
  }
}

export default Cart
