import React, { Component } from 'react';
import './App.css';

import Cart from './cart/Cart'
import SearchBar from './components/SearchBar';
import Products from './products/Products';

let COUNTERS = {}


let debounce;

console.count = (instance) => {
  const name = instance.name || instance.constructor.name;

  if (!COUNTERS[name]) {
    COUNTERS[name] = 0;
  }

  COUNTERS[name] = COUNTERS[name] + 1;

  if (debounce) {
    clearTimeout(debounce);
  }

  debounce = setTimeout(() => {
    console.group('COUNTERS');
    console.log({ ...COUNTERS });
    console.groupEnd();

    COUNTERS = {};
  }, 300)
}

let available = [
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
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleMarkAsFavorite = this.handleMarkAsFavorite.bind(this);
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
        product = { ...product };

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
        product = { ...product };

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

  handleAddToCart(product) {
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

  handleMarkAsFavorite(item) {
    available = available.map((product) => {
      if (product.id === item.id) {
        product = { ...product };

        product.favorite = !product.favorite;
      }

      return product;
    })

    const { products } = this.state;

    this.setState({
      products
    })
  }

  render() {
    const list = this.getProducts();
    const { products } = this.state;

    console.count(this);

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
        </div>
        
        <div>
          <Products
            products={ list }
            onAddToCart={ this.handleAddToCart }
            onMarkAsFavorite={ this.handleMarkAsFavorite }
          />
        </div>
      </div>
    );
  }
}

export default App;
