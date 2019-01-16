import React, { PureComponent } from 'react'
import CartItem from './CartItem';

export class CartList extends PureComponent {

	constructor(props) {
		super(props);

		this.renderCartItems = this.renderCartItems.bind(this);
		this.getTotal = this.getTotal.bind(this);
	}

  renderCartItems(product) {
    const { onAdd, onRemove, onDelete } = this.props;

    return (
      <CartItem
        key={ product.id }
        product={ product }
        onAdd={ onAdd }
        onRemove={ onRemove }
        onDelete={ onDelete }
        />
    )
  }

  getTotal() {
		const { products } = this.props;
    let total = 0;

    products.forEach((item) => {
      total+= parseFloat(item.price) * parseFloat(item.quantity);
    })

    return total;
  }

  render() {
    const { products } = this.props;
    
    console.count(this);

    return (
    	<table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { products.map(this.renderCartItems) }
        </tbody>

        <tfoot>
          <tr>
            <th colSpan="3" className="footer">
              Total: ${ this.getTotal() }
            </th>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default CartList
