import React, { Component } from 'react'
import ActionButton from '../components/ActionButton';

export class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.markAsFavorite = this.markAsFavorite.bind(this);
  }

  addToCart() {
    const { product } = this.props;

    this.props.onAddToCart(product);
  }

  markAsFavorite() {
    const { product } = this.props;

    this.props.onMarkAsFavorite(product);
  }

  render() {
    const { product } = this.props;

    return (
      <div key={ product.id } className="product-list-item">
        <img src="https://via.placeholder.com/150" />
        <h4>{ product.name }</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <ActionButton
            type="button"
            name="favorite"
            text="Favorito"
            data={ product }
            className={ product.favorite ? 'favorite' : '' }
            onClick={ this.markAsFavorite }
          />

          <ActionButton
            type="button"
            name="add-to-cart"
            text="Agregar"
            data={ product }
            onClick={ this.addToCart }
          />
        </div>
      </div>
    )
  }
}

export default ProductListItem
