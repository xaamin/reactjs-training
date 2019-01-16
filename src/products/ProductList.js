import React, { PureComponent } from 'react'
import ProductListItem from './ProductListItem';

export class ProductList extends PureComponent {
  constructor(props) {
    super(props);

    this.renderProductListItem = this.renderProductListItem.bind(this);
  }

  renderProductListItem(product) {
    const { onAddToCart, onMarkAsFavorite } = this.props;

    return (
      <ProductListItem
        key={ product.id }
        product={ product }
        onAddToCart={ onAddToCart }
        onMarkAsFavorite={ onMarkAsFavorite } />
    )
  }
  
  render() {
    const { products } = this.props;

    console.count(this);

    return (
      <div>
        {
          products.map(this.renderProductListItem)
        }
      </div>
    )
  }
}

export default ProductList
