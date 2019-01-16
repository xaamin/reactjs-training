import React, { Component } from 'react'
import ProductListItem from './ProductListItem';

export class Products extends Component {
  constructor(props) {
    super(props);

    this.renderProductListItem = this.renderProductListItem.bind(this);
  }

  renderProductListItem(product) {
    const { onAddToCart, onMarkAsFavorite } = this.props;

    return (
      <ProductListItem
        product={ product }
        onAddToCart={ onAddToCart }
        onMarkAsFavorite={ onMarkAsFavorite } />
    )
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {
          products.map(this.renderProductListItem)
        }
      </div>
    )
  }
}

export default Products
