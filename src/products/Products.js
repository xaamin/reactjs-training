import React, { PureComponent } from 'react'
import ProductList from './ProductList';

export class Products extends PureComponent {
  render() {
    const { products, onAddToCart, onMarkAsFavorite } = this.props;

    console.count(this);

    return (
      <ProductList
        products={ products }
        onAddToCart={ onAddToCart }
        onMarkAsFavorite={ onMarkAsFavorite }
      />
    )
  }
}

export default Products
