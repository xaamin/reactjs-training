import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ActionButton from './components/ActionButton'
import Cart from './cart/Cart'
import SearchBar from './cart/SearchBar';

let COUNTERS = {}

const count = (instance) => {
  const name = instance.name || instance.constructor.name;

  if (!COUNTERS[name]) {
    COUNTERS[name] = 0;
  }

  COUNTERS[name] = COUNTERS[name] + 1;

  console.log('COUNTERS', COUNTERS);
}

const available = [
  {
    id: 1,
    name: 'Apple',
    quantity: 1,
    unit_price: 40.00,
    price: 40.00,
    favorite: false,
  },
  {
    id: 2,
    name: 'Bananas',
    quantity: 1,
    unit_price: 15.00,
    price: 15.00,
    favorite: false,
  },
  {
    id: 3,
    name: 'Carrots',
    quantity: 1,
    unit_price: 16.00,
    price: 16.00,
    favorite: false,
  },
  {
    id: 4,
    name: 'Drill',
    quantity: 1,
    unit_price: 10.00,
    price: 10.00,
    favorite: false,
  },
  {
    id: 5,
    name: 'Orange',
    quantity: 1,
    unit_price: 12.00,
    price: 12.00,
    favorite: false,
  },
  {
    id: 6,
    name: 'Watermelon',
    quantity: 1,
    unit_price: 25.00,
    price: 25.00,
    favorite: false,
  }
];

class App extends Component {

  state = {
    counter: 0,
    products: [
      {
        id: 1,
      name: 'Apple',
      quantity: 1,
      unit_price: 40.00,
      price: 40.00
      }
    ]
  }

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.renderProductListItem = this.renderProductListItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.markAsFavorite = this.markAsFavorite.bind(this);
  }

  componentWillMount() {
    console.log('WILL MOUNT FIRED')
  }

  componentDidMount() {
    console.log('DID MOUNT FIRED')

    
    setTimeout(() => {
      this.setState({
        products: [ ...this.state.products, {
          id: 2,
          name: 'Bananas',
          quantity: 1,
          unit_price: 15.00,
          price: 15.00
        },]
      })
    }, 500)
  }

  componentWillUpdate() {
    console.log('WILL UPDATE FIRED')
  }

  componentDidUpdate() {
    console.log('DID UPDATE FIRED')
  }

  componentWillUnmount() {
    console.log('WILL UNMOUNT FIRED')
  }

  handleAddItem(item) {
    const products = this.state.products.map((product) => {
      if (product.id === item.id) {
        product.quantity++;
        product.price = product.quantity * product.unit_price;

      }

      return product;
    })

    this.setState({
      products
    })
  }

  handleRemoveItem(item) {
    const products = this.state.products.map((product) => {
      if (product.id === item.id) {
        product.quantity--;
        product.price = product.quantity * product.unit_price;
      }

      return product;
    })

    this.setState({
      products
    })
  }

  handleDeleteItem(product) {
    console.log('REQUESTING DELETE FOR ', product)

    const products = this.state.products.filter((item) => {
      return product.id != item.id;
    })

    this.setState({
      products
    })
  }

  addToCart(product) {
    const found = this.state.products.find((item) => product.id === item.id)

    if (!found) {
      const { products } = this.state;

      products.push(product);

      this.setState({
        products
      })
    }
  }

  handleSearch(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  getProducts() {
    const { search } = this.state;

    return available.filter((product) => {
      if (search) {
        return product.name.indexOf(search) !== -1
      }

      return true;
    })
  }

  markAsFavorite(item) {
    available.map((product) => {
      if (product.id === item.id) {
        product.favorite = !product.favorite;
      }

      return product;
    })

    const { products } = this.state;

    this.setState({
      products
    })
  }

  renderProductListItem(product) {
    return (
      <div key={ product.id } className="product-list-item">
        <img src="https://via.placeholder.com/150" />
        <h4>{ product.name }</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <ActionButton type="button" name="favorite" text="Favorito" data={ product } className={ product.favorite ? 'favorite' : '' } onClick={ this.markAsFavorite } />
          <ActionButton type="button" name="add-to-cart" text="Agregar" data={ product } onClick={ this.addToCart } />
        </div>
      </div>
    )
  }

  render() {
    const list = this.getProducts();
    const { products } = this.state;

    count(this);

    return (
      <div className="App">
        <Cart
          products={ products }
          onAdd={ this.handleAddItem }
          onRemove={ this.handleRemoveItem }
          onDelete={ this.handleDeleteItem }
          />

        <hr />

        <div>
          <SearchBar onInputTextChange={ this.handleSearch } />
          
          <div>
            {
              list.map(this.renderProductListItem)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
