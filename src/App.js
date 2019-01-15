import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ActionButton from './components/ActionButton'

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

    this.search = this.search.bind(this);
    this.addItem = this.addItem.bind(this);
    this.substractItem = this.substractItem.bind(this)
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

  removeItem(product) {
    console.log('REQUESTING DELETE FOR ', product)

    const products = this.state.products.filter((item) => {
      return product.id != item.id;
    })

    this.setState({
      products
    })
  }

  addItem(item) {
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

  substractItem(item) {
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

  getTotal() {
    let total = 0;

    this.state.products.forEach((item) => {
      total+= parseFloat(item.price) * parseFloat(item.quantity);
    })

    return total;
  }

  search(event) {
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

  handleClick(data) {
    alert(data)
  }

  render() {
    const products = this.getProducts();

    count(this);

    const promise = new Promise((resolve, reject) => {

    })

    return (
      <div className="App">
        <h4>Cart</h4>

        <ActionButton name="dummy" text="Dummy button" data="Hola" onClick={ this.handleClick } promise={ promise } />

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
            { this.state.products.map((product) => (
              <tr key={ product.id }>
                <td>{ product.name }</td>
                <td>
                  <ActionButton type="button" name="substract" text="-" data={ product } onClick={ this.substractItem } />
                  { product.quantity }
                  <ActionButton type="button" name="add" text="+" data={ product } onClick={ this.addItem } />
                </td>
                <td>{ product.price }</td>
                <td>
                  <button type="button" onClick={ () => this.removeItem(product) }>
                    X
                  </button>
                </td>
              </tr>
            )) }
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="3" className="footer">
                Total: ${ this.getTotal() }
              </th>
            </tr>
          </tfoot>
        </table>

        <hr />

        <div>
          <input type="text" name="search" autoComplete="off" className="input-search" placeholder="Search" onChange={ this.search } />
          <div>
            {
              products.map((product) => (
                <div key={ product.id } className="product-list-item">
                  <img src="https://via.placeholder.com/150" />
                  <h4>{ product.name }</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div>
                    <button type="button" className={ product.favorite ? 'favorite' : '' } onClick={ () => this.markAsFavorite(product) }>Favorito</button>
                    <button type="button" onClick={ () => this.addToCart(product) }>Agregar</button>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
