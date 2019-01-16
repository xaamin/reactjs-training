import React, { Component } from 'react'
import ActionButton from '../components/ActionButton';

export class CartItem extends Component {
  render() {
    const { product } = this.props;
    
    return (
      <tr>
        <td>{ product.name }</td>
        <td>
          <ActionButton
            type="button"
            name="substract"
            text="-"
            data={ product }
            onClick={ this.props.onRemove } />
            
          { product.quantity }

          <ActionButton
            type="button"
            name="add"
            text="+"
            data={ product }
            onClick={ this.props.onAdd } />
        </td>
        <td>{ product.price }</td>
        <td>
          <ActionButton
            type="button"
            name="delete"
            text="X"
            data={ product }
            onClick={ this.props.onDelete } />
        </td>
      </tr>
    )
  }
}

export default CartItem
