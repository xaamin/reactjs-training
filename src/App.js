import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let COUNTERS = {

}

const count = (instance) => {
  const name = instance.name || instance.constructor.name;

  if (!COUNTERS[name]) {
    COUNTERS[name] = 0;
  }

  COUNTERS[name] = COUNTERS[name] + 1;

  console.log('COUNTERS', COUNTERS);
}

class App extends Component {

  state = {
    counter: 0,
    products: [
      {
        id: 1,
        name: 'USB',
        quantity: 1,
        price: 86.00
      }
    ]
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
          name: 'MOUSE',
          quantity: 1,
          price: 70.00
        }]
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

  getTotal() {
    let total = 0;

    this.state.products.forEach((item) => {
      total+= parseFloat(item.price) * parseFloat(item.quantity);
    })

    return total;
  }

  render() {
    count(this);

    return (
      <div className="App">
        <h4>Cart</h4>

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
                <td>{ product.quantity }</td>
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
      </div>
    );
  }
}

export default App;
